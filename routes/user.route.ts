import { Router } from 'express';

import UserController from '../controllers/user.controller';

import Validator from '../middlewares/user.middleware'

import { IUser } from '../protocols/user.interface';

const userRouter = Router();

const userController = new UserController();

userRouter.get('/user', UserController.getAll);

userRouter.post('/user', new UserController.create)
