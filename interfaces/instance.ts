export interface BaseInstanceI {
  name: string;
  ip: string;
  service: string;
  targetId: string;
}

export interface InstanceI extends BaseInstanceI {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}
