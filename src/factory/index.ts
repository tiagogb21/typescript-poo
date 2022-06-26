import UserController from '../controllers/user.controller';
import { AdminService, UserService } from '../services/user.service';
import Model from '../models/user.model';
import LogError from '../helper/log';

export default class Factory {
  userFactory() {
    const model = new Model();
    const userService = new UserService(model);
    const userController = new UserController(userService);
    return new LogError(userController);
  }

  adminFactory() {
    const model = new Model();
    const adminService = new AdminService(model);
    const adminController = new UserController(adminService);
    return adminController;
  }
}