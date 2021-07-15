export interface BasePumpI {
  targetId: string;
  instanceId: string;
  numberOfPumps: number;
}

export interface PumpI extends BasePumpI {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}
