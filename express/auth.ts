import { Request, Response } from "express";
var express = require("express");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var router = express.Router();

//for testing
let users = [
  {
    id: 1,
    email: "test@example.com",
    password: "password123",
    firstName: "test",
    lastName: "testytest",
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

    // if (user && (await bcrypt.compare(password, user.password))) {
    if (user && user.password == password) {
      // Create token
      const token = jwt.sign(
        {
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["editor", "user", "mod"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": user.id,
          },
        },
        process.env.TOKEN_KEY,
        { expiresIn: "2h" }
      );
      console.log(token);
      res.set({
        Authorization: `Bearer ${token}`,
      });
      res.status(200).json(user);
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
    const { firstName, lastName, email, password } = req.body;
    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = users.find((u) => u.email == email);
    if (oldUser) {
      return res.status(409).send("User Already Exists. Please Login");
    }
    //Encrypt user password
    let encryptedPassword = await bcrypt.hash(password, 10);
    //create user
    // ....
    //
    const token = jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["editor", "user", "mod"],
          "x-hasura-default-role": "user",
          "x-hasura-user-id": 2,
        },
      },
      process.env.TOKEN_KEY,
      { expiresIn: "2h" }
    );
    // return new user
    res.status(201).json(encryptedPassword);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

module.exports = router;
