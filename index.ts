import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectToDB } from "./connections/mongodb";

import { app as appRouter } from "./routes/api";

connectToDB();
dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", appRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
