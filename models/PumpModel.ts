import mongoose, { Schema } from "mongoose";
import { PumpI } from "../interfaces/pump";

const PumpSchema = new Schema<PumpI>(
  {
    targetId: { type: String, required: true },
    numberOfPumps: { type: Number, required: true },
    instanceId: { type: String, required: true },
  },
  { timestamps: true }
);

export const Pump = mongoose.model<PumpI>("Pump", PumpSchema);
