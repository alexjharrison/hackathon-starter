import { Router } from "express";
import multer from "multer";
import { v4 } from "uuid";
import { File } from "../api";
import { pg } from "../config/postgres";

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "/usr/src/app/static");
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
  dest: "static",
  limits: { fileSize: 50_000_000 },
  storage,
}).single("file");

const router = Router();

// return file by uuid key
router.get("/:key", (req, res) => {});

// save file to /static folder
// save metadata to db
router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).json({ message: "wtf mate" });
    } else {
      res.status(200).json({ message: "success" });
    }
  });
});

export const uploadHandler = router;
