import { Router } from 'express';
import Factory from '../factory/index';
import { IUser } from '../protocols/user.interface';

interface Service {
  create(data: Omit<IUser, 'id'>): IUser
}

const userRouter = Router();

const factoryUser = new Factory().userFactory()
userRouter.post('/user', (req, res, next) => {
  factoryUser.create(req, res, next);
})

const factoryAdmin = new Factory().adminFactory();
userRouter.post('/admin', (req, res, next) => {
  factoryAdmin.create(req, res, next);
});

export default userRouter;
