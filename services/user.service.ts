import UserModel from '../models/user.model';
import { IUser } from '../protocols/user.interface';
import Validator from '../middlewares/user.middleware';

export class UserService {
  model: UserModel;
  constructor() {
    this.model = new UserModel();
  }
  async create(data: Omit<IUser, 'id'>) {
    new Validator(data).verify();
    const user = await this.model.create(data);
    return user;
  }
}

export class AdminService {
  model: UserModel;
  
  constructor() {
    this.model = new UserModel();
  }

  async create(data: Omit<IUser, 'id'>/* , token: string */) {
    new Validator(data).verify();

    // tokenAdminValidator(token);
    
    const admin = await this.model.create(data);

    return admin;
  }

}
