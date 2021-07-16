import mongoose, { Schema } from "mongoose";
import { UserI } from "../interfaces/user";

const UserSchema = new Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

export const User = mongoose.model<UserI>("user", UserSchema);
