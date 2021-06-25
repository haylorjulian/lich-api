import { instances } from "./mockData";
import { Instance, BaseInstance } from "../interfaces/instance";

export const findAll = async (): Promise<Instance[]> =>
  Object.values(instances);

export const find = async (id: string): Promise<Instance> => instances[id];

// Public
export const create = async (
  instance: Omit<BaseInstance, "targetId">
): Promise<Instance> => {
  const id = "4";

  console.log(instance);

  const newInstance = {
    id,
    ...instance,
    targetId: "-1",
  };

  // TODO: Override MongoDB entry
  instances[id] = newInstance;

  return instances[id];
};

// Public
export const update = async (
  id: string,
  updatedInstance: Partial<BaseInstance>
): Promise<Instance | null> => {
  const instance = await find(id);

  if (!instance) {
    // TODO: Replace with error logger
    return null;
  }

  // TODO: Override MongoDB entry
  instances[id] = { ...instance, id, ...updatedInstance };

  return instances[id];
};

export const remove = async (id: string): Promise<null | void> => {
  const instance = await find(id);

  if (!instance) {
    // TODO: Replace with error logger
    return null;
  }

  delete instances[id];
};
