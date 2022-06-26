import UserModel from '../models/user.model';
import { IUser } from '../protocols/user.interface';
import Validator from '../validators/users';

export class UserService {
  model: UserModel;
  constructor() {
    this.model = new UserModel();
  }
}
