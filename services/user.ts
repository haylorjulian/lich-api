import { UserI, BaseUserI } from "../interfaces/user";
import { User } from "../models/UserModel";

export const find = async (email: string): Promise<UserI | null> => {
  const instance = await User.findOne({ email });
  return instance;
};
