import { Request, Response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pg } from "./postgres";
import { User } from "./types";

const router = Router();

const tokenKey: string = process.env.TOKEN_KEY || "";

router.post("/login", async (req: Request, res: Response) => {
  // Our login logic starts here
  try {
    // Get user input
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // const user = users.find((u) => u.email == email);
    const user: User = (
      await pg.query(`select * from users where email=$1`, [email])
    ).rows[0];

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
    const oldUser: User = (
      await pg.query(`select * from users where email=$1`, [email])
    ).rows[0];
    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }
    //Encrypt user password
    let encrypted_password = await bcrypt.hash(password, 10);
    //create user
    const id = Math.floor(Math.random() * 10000);
    const newUser: User = (
      await pg.query(
        `insert into users (first_name, last_name, encrypted_password, email) VALUES ($1, $2, $3, $4) returning id, first_name, last_name, encrypted_password, email`,
        [first_name, last_name, encrypted_password, email]
      )
    ).rows[0];
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
