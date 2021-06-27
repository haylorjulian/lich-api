import { Request, Response } from "express";
import * as InstanceService from "../services/instance";
import { BaseInstanceI, InstanceI } from "../interfaces/instance";

export const getInstances = async (req: Request, res: Response) => {
  try {
    const instances: InstanceI[] = await InstanceService.findAll();

    res.status(200).send(instances);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const getInstance = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const instance: InstanceI | null = await InstanceService.find(id);

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
    const instance: BaseInstanceI = req.body;

    const newInstance = await InstanceService.create(instance);

    res.status(201).json(newInstance);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

export const updateInstance = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const fieldsToUpdate: InstanceI = req.body;
    const updatedItem = await InstanceService.update(id, fieldsToUpdate);
    return res.status(200).json(updatedItem);
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
