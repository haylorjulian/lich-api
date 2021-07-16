import { Request, Response } from "express";
import * as dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt, { Secret } from "jsonwebtoken";

import * as UserService from "../services/user";

dotenv.config();

const TOKEN_KEY = process.env.TOKEN_KEY;

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }

    const user = await UserService.find(email);

    console.log(user);

    const encryptedPassword = await bcrypt.hash(password, 10);

    console.log(encryptedPassword);

    const auth = await bcrypt.compare(password, user!.password);

    console.log(auth);

    if (user && auth) {
      const token = jwt.sign(
        { user_id: user._id, email },
        TOKEN_KEY as Secret,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;

      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
};
