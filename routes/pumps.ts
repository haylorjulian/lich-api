import express from "express";
import {
  createPumpReport,
  getPumps,
  getPumpReport,
} from "../controllers/pumps";

export const router = express.Router();

router.post("/", createPumpReport);
router.get("/", getPumps);
router.get("/:targetId/:instanceId", getPumpReport);
