require("dotenv").config();
import express from "express";
const auth = require("./auth");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/auth", auth);
app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
