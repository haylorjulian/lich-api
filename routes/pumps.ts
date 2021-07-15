import express from "express";
import { createPumpReport } from "../controllers/pumps";

export const router = express.Router();

router.post("/", createPumpReport);
