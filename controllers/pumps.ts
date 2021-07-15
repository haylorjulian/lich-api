import { Request, Response } from "express";
import * as PumpService from "../services/pump";
import { PumpI } from "../interfaces/pump";

export const createPumpReport = async (req: Request, res: Response) => {
  try {
    const pumpReport: PumpI = req.body;

    const newReport = await PumpService.create(pumpReport);

    res.status(201).json(newReport);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
