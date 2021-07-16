export interface BaseUserI {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
}

export interface UserI extends BaseUserI {
  _id: string;
}
