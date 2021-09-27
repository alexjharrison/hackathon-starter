import { Auth_Users } from "../../src/api";

declare global {
  namespace Express {
    interface Request {
      token?: string;
      user?: Auth_Users;
    }
  }
}
