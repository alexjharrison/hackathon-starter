import { createJwtToken, encryptPassword } from "../../services/jwt";
import { insertUser, userByEmail } from "../../services/users";
import { WebhookHandler } from "../../types";
import { Auth_Users, LoginResult, Mutation_RootRegisterArgs } from "../../api";

export const register: WebhookHandler<Mutation_RootRegisterArgs, LoginResult> =
  async (req, res) => {
    {
      try {
        // Get user input
        const { first_name, last_name, email, password } = req.body.input.args;
        // Validate user input
        if (!(email && password && first_name && last_name)) {
          return res.status(400).json({ message: "All input is required" });
        }
        // check if user already exists
        // Validate if user exist in our database
        const oldUser: Auth_Users = await userByEmail(email);

        if (oldUser) {
          return res
            .status(409)
            .json({ message: "User Already Exists. Please Login" });
        }

        //create user
        const newUser = await insertUser(req.body.input.args);
        const token = await createJwtToken(newUser.id);
        // return new user and login
        res.status(201).json({ token });
      } catch (err) {
        console.log(err);
      }
    }
  };
