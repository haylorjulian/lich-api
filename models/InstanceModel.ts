import mongoose, { Schema } from "mongoose";
import { InstanceI } from "../interfaces/instance";

const InstanceSchema = new Schema<InstanceI>(
  {
    name: { type: String, required: true },
    ip: { type: String, required: true },
    service: { type: String, required: true },
    targetId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Instance = mongoose.model<InstanceI>("Instance", InstanceSchema);
