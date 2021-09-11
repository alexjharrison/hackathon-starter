import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const tokenKey: string = process.env.TOKEN_KEY || "";

//for testing
//password is "password123"
let users = [
  {
    id: 2,
    first_name: "bob",
    last_name: "woodward",
    email: "test1@example.com",
    encrypted_password:
      "$2b$10$KxGP2/Y.TxUJScVBXrF2q.19Ebi8HGg/Y00EkO/CjhkHyJqmRR29K",
  },
];

router.post("/login", async (req: Request, res: Response) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    const user = users.find((u) => u.email == email);

    if (user && (await bcrypt.compare(password, user.encrypted_password))) {
      // Create token
      const token = jwt.sign(
        {
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": user.id,
          },
        },
        tokenKey,
        { expiresIn: "2h" }
      );
      res.set({
        Authorization: `Bearer ${token}`,
      });
      res.status(200).json({ user, token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/register", async (req: Request, res: Response) => {
  // Our register logic starts here
  try {
    // Get user input
    const { first_name, last_name, email, password } = req.body;
    // Validate user input
    if (!(email && password && first_name && last_name)) {
      res.status(400).send("All input is required");
    }
    // check if user already exists
    // Validate if user exist in our database
    const oldUser = users.find((u) => u.email == email);
    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }
    //Encrypt user password
    let encrypted_password = await bcrypt.hash(password, 10);
    //create user
    const id = Math.floor(Math.random() * 10000);
    const newUser = {
      id,
      first_name,
      last_name,
      email,
      encrypted_password,
    };
    users.push(newUser);
    //
    const token = jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["user"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": id,
        },
      },
      tokenKey,
      { expiresIn: "2h" }
    );
    res.set({
      Authorization: `Bearer ${token}`,
    });
    // return new user and login
    res.status(201).json({ user: newUser, token });
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

module.exports = router;
