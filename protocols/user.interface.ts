export type IUser = {
  id: number;
  name: string;
  email: string;
  age: number;
  role: string;
}

export interface IModel {
  create(newUser: Omit<IUser, 'id'>): Promise<IUser>
}
