import { PumpI, BasePumpI } from "../interfaces/pump";
import { Pump } from "../models/PumpModel";

// Public
export const create = async (pumpReport: BasePumpI): Promise<PumpI> => {
  const newPumpReport = await Pump.create({
    ...pumpReport,
  });

  return newPumpReport;
};

export const find = async (id: string): Promise<PumpI | null> => {
  const pumpReport = await Pump.findOne({ _id: id });
  return pumpReport;
};

export const findAll = async (): Promise<PumpI[]> => {
  const pumps = await Pump.find({});
  return pumps;
};

export const findAllByTargetIdAndInstanceId = async (
  targetId: string,
  instanceId: string
): Promise<PumpI[] | null> => {
  const pumpReport = await Pump.find({ targetId, instanceId });
  return pumpReport;
};
