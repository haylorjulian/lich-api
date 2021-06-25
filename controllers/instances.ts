import { Request, Response } from "express";
import * as InstanceService from "../services/instance";
import { BaseInstance, Instance } from "../interfaces/instance";

export const getInstances = async (req: Request, res: Response) => {
  try {
    const instances: Instance[] = await InstanceService.findAll();

    res.status(200).send(instances);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getInstance = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const instance: Instance = await InstanceService.find(id);

    if (instance) {
      return res.status(200).send(instance);
    }

    res.status(404).send(`Instance with id=${id} not found`);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const createInstance = async (req: Request, res: Response) => {
  try {
    console.log("BIDY", req.body);

    const instance: BaseInstance = req.body;

    const newInstance = await InstanceService.create(instance);

    res.status(201).json(newInstance);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const updateInstance = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const itemUpdate: Instance = req.body;

    const existingItem: Instance = await InstanceService.find(id);

    if (existingItem) {
      const updatedItem = await InstanceService.update(id, itemUpdate);
      return res.status(200).json(updatedItem);
    }

    const newInstance = await InstanceService.create(itemUpdate);

    res.status(201).json(newInstance);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const deleteInstance = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    await InstanceService.remove(id);

    res.sendStatus(204);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
