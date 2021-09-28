import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Auth_Users } from "../api";
import { RequestHandler } from "express";
import { decode } from "jsonwebtoken";
import { userByID } from "./users";

// Defaults to one year
export const jwtExpiration = () =>
  Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 256;

export const jwtTokenSecret = String(process.env.TOKEN_KEY);

export const createJwtToken = (userId: number) =>
  jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-default-role": "user",
        "x-hasura-user-id": "" + userId,
      },
    },
    jwtTokenSecret,
    { expiresIn: jwtExpiration() }
  );

export const encryptPassword = (password: string): Promise<string> =>
  bcrypt.hash(password, 10);

export const verifyPassword = async (
  password: string,
  user: Auth_Users
): Promise<boolean> => bcrypt.compare(password, user.encrypted_password);

interface JWTContent {
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": string[];
    "x-hasura-default-role": string;
    "x-hasura-user-id": string;
  };
}

export const jwtMiddleware: RequestHandler = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (token) {
    req.token = token;
    const values = decode(token) as JWTContent;
    const user = await userByID(
      values["https://hasura.io/jwt/claims"]["x-hasura-user-id"]
    );
    if (!user) {
      res.status(401).send({ message: "unauthorized" });
      return;
    } else req.user = user;
  } else {
    res.status(401).send({ message: "unauthorized" });
    return;
  }
  next();
};
