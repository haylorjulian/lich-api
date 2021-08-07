import { v4 as uuidv4 } from "uuid";
import { InstanceI } from "../interfaces/instance";

type Instances = Record<string, InstanceI>;

export const instances: Instances = {
  "1": {
    _id: "1",
    name: "DINK",
    ip: uuidv4(),
    service: "https://operavps.com/",
    targetId: uuidv4(),
  },
  "2": {
    _id: "2",
    name: "DONK",
    ip: uuidv4(),
    service: "https://operavps.com/",
    targetId: uuidv4(),
  },
  "3": {
    _id: "3",
    name: "DOINK",
    ip: uuidv4(),
    service: "https://operavps.com/",
    targetId: uuidv4(),
  },
};
