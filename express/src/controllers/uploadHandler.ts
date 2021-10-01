import { Router } from "express";
import multer from "multer";
import { v4 } from "uuid";
import { File } from "../api";
import { pg } from "../config/postgres";
import { jwtMiddleware } from "../services/jwt";

const storagePath = "/usr/src/app/static/";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, storagePath);
  },
  async filename(req, file, cb) {
    const id = v4();
    if (!req.headers["content-length"]) return;
    console.log(file);

    await pg.query<File>(
      `insert into public.file (id, filename, mimetype, uploaded_by, filesize)
      values ($1, $2, $3, $4, $5);`,
      [
        id,
        file.originalname,
        file.mimetype,
        req.user?.id,
        parseInt(req.headers["content-length"]),
      ]
    );
    cb(null, id);
  },
});

const upload = multer({
  limits: { fileSize: 50_000_000 },
  storage,
}).single("file");

const router = Router();

// return file by uuid key
router.get("/:key", async (req, res) => {
  console.log(req.route);
  const data = await pg.query<File>(`select * from public.file where id=$1`, [
    req.params.key,
  ]);
  const file = data.rows[0];
  if (!file) {
    res.status(404).send();
    return;
  }
  console.log(file);
  res.download(storagePath + file.id, file.filename);
});

// save file to /static folder
// save metadata to db
router.post("/upload", jwtMiddleware, (req, res) => {
  console.log(req.route);
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: "wtf mate" });
    } else {
      res.status(200).json({ message: "success" });
    }
  });
});

export const uploadHandler = router;
