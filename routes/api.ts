import express from "express";
import { router as instancesRouter } from "./instances";

export const app = express();

app.use("/instances", instancesRouter);
