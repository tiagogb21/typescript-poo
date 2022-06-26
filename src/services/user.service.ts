import { tokenAdminValidator } from "../helper/token-validator";
import { IUser } from "../interfaces/user.interface";
import Validator from "../middlewares/user.middleware";

interface Model {
  create(data: Omit<IUser, 'id'>): Promise<IUser>
}

export class UserService {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  async create(data: Omit<IUser, 'id'>) {
    new Validator(data).valid();
    const user = await this.model.create(data);

    return user;
  }
}

export class AdminService {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  async create(data: Omit<IUser, 'id'>) {
    new Validator(data).valid();
    
    const admin = await this.model.create(data);

    return admin;
  }
}