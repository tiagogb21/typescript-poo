import { Router } from 'express';

import Controller from '../controllers/user.controller';
import { UserService, AdminService } from '../service/user.service';
import Validator from '../middlewares/user.middleware';
import {IUser} from '../protocols/user.interface';

interface Service {
  create(data: Omit<IUser, 'id'>): IUser
}

console.log(new Validator())

const userRouter = Router();

// const userController = new Controller(new UserService());
// userRouter.post('/user', Validator.verify(), userController.create)

// const adminController = new Controller(new AdminService());
// userRouter.post('/admin', Validator.verify(), adminController.create);

export default userRouter;