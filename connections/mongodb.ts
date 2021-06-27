import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

export function connectToDB() {
  const MONGODB_URL = process.env.MONGODB_URL;
  mongoose.connect(MONGODB_URL!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;
  db.on(
    "error",
    console.error.bind(console, `Error connecting to MongoDB: ${MONGODB_URL}`)
  );
  db.once("open", function () {
    console.log("Connected to %s", MONGODB_URL);
  });
}
