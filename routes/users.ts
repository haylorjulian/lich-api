import express from "express";
import { login } from "../controllers/users";

export const router = express.Router();

router.post("/", login);
