import UserModel from '../models/user.model';
import { IUser } from '../protocols/user.interface';
import Validator from '../validators/users';

export class UserService {
  model: UserModel;
  constructor() {
    this.model = new UserModel();
  }
  async create(data: Omit<IUser, 'id'>) {
    new Validator(data).valid();
    const user = await this.model.create(data);
    return user;
  }
}

export class AdminService {
  model: Model;
  
  constructor() {
    this.model = new Model();
  }

  async create(data: Omit<IUser, 'id'>, token: string) {
    new Validator(data).verify();

    tokenAdminValidator(token);
    
    const admin = await this.model.create(data);

    return admin;
  }

}
