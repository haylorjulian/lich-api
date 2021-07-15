import { PumpI, BasePumpI } from "../interfaces/pump";
import { Pump } from "../models/PumpModel";

// Public
export const create = async (pumpReport: BasePumpI): Promise<PumpI> => {
  const newPumpReport = await Pump.create({
    ...pumpReport,
  });

  return newPumpReport;
};
