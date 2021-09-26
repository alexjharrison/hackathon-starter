import { Router } from "express";

const router = Router();

// return file by uuid key
router.get("/:key", (req, res) => {});

// save file to /static folder
// save metadata to db
router.post("/", (req, res) => {});

export const uploadHandler = router;
