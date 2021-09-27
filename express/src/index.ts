import express from "express";
import { uploadHandler } from "./controllers/uploadHandler";
import { jwtMiddleware } from "./services/jwt";
import { webhookRoutes } from "./webhooks";
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/webhook", webhookRoutes);

app.use("/files", jwtMiddleware, uploadHandler);

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
