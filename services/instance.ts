import { InstanceI, BaseInstanceI } from "../interfaces/instance";
import { Instance } from "../models/InstanceModel";

export const findAll = async (): Promise<InstanceI[]> => {
  const instances = await Instance.find({});
  return instances;
};

export const find = async (id: string): Promise<InstanceI | null> => {
  const instance = await Instance.findOne({ _id: id });
  return instance;
};

// Public
export const create = async (
  instance: Omit<BaseInstanceI, "targetId">
): Promise<InstanceI> => {
  const newInstance = await Instance.create({
    ...instance,
    targetId: "-1",
  });

  return newInstance;
};

// Public
export const update = async (
  id: string,
  fieldsToUpdate: Partial<BaseInstanceI>
): Promise<InstanceI | null> => {
  const currentInstance = find(id);
  const newInstance = { ...currentInstance, ...fieldsToUpdate };
  const updatedInstance = await Instance.findOneAndUpdate(
    { _id: id },
    newInstance,
    {
      new: true,
    }
  );

  if (!updatedInstance) {
    // TODO: Replace with error logger
    return null;
  }

  return updatedInstance;
};

export const remove = async (id: string): Promise<null | void> => {
  Instance.deleteOne({ _id: id }, function (err) {
    if (err) return err;
  });
};
