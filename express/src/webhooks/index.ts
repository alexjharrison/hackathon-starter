import { Router } from "express";
import { login } from "./auth/login";
import { register } from "./auth/register";

export const webhookRoutes = Router();

webhookRoutes.post("/", (req, res, next) => {
  const { name } = req.body.action;

  if (name === "login") {
    login(req, res, next);
  } else if (name === "register") {
    register(req, res, next);
  } else {
    res.status(404).json({ message: "Webhook not found" });
  }
});
