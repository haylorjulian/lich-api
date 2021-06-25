import express from "express";
import {
  getInstances,
  getInstance,
  createInstance,
  updateInstance,
  deleteInstance,
} from "../controllers/instances";

export const router = express.Router();

router.get("/", getInstances);
router.get("/:id", getInstance);
router.post("/", createInstance);
router.put("/:id", updateInstance);
router.delete("/:id", deleteInstance);
