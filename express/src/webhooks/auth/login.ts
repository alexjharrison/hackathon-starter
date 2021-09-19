import {
  Auth_Users,
  Mutation_RootRegisterArgs,
  RegisterResult,
} from "../../api";
import bcrypt from "bcrypt";
import { createJwtToken } from "../../services/jwt";
import { WebhookHandler } from "../../types";
import { userByEmail } from "../../services/users";

export const login: WebhookHandler<Mutation_RootRegisterArgs, RegisterResult> =
  async (req, res, next) => {
    // Our login logic starts here
    try {
      const { email, password } = req.body.input.args;

      // Get user input
      if (!(email && password)) {
        res.status(400).json({ message: "All input is required" });
        return;
      }
      // const user = users.find((u) => u.email == email);
      const user: Auth_Users = await userByEmail(email);

      if (user && (await bcrypt.compare(password, user.encrypted_password))) {
        // Create token
        const token = createJwtToken(user.id);
        res.status(200).json({ token });
      } else {
        res.status(400).json({ message: "Invalid Credentials" });
      }
    } catch (err) {
      console.log(err);
    }
  };
