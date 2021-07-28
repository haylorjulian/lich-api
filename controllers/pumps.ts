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

export const getPumps = async (req: Request, res: Response) => {
  try {
    const pumps: PumpI[] = await PumpService.findAll();

    res.status(200).send(pumps);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getPumpReport = async (req: Request, res: Response) => {
  const targetId = req.params.targetId;
  const instanceId = req.params.instanceId;

  try {
    const pumpReports: PumpI[] | null =
      await PumpService.findAllByTargetIdAndInstanceId(targetId, instanceId);

    if (pumpReports) {
      return res.status(200).send(pumpReports);
    }

    res
      .status(404)
      .send(`No pump reports found for target with targetId=${targetId}`);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
