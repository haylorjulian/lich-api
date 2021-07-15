import express from "express";
import { router as pumpsRouter } from "./pumps";
import { router as instancesRouter } from "./instances";

export const app = express();

app.use("/pumps", pumpsRouter);
app.use("/instances", instancesRouter);
