import { Router } from 'express';
import { Response, Request, NextFunction } from 'express';
import Factory from '../factory/index';
import { IUser } from '../interfaces/user.interface';
import Validator from '../middlewares/user.middleware';

interface Service {
  create(data: Omit<IUser, 'id'>): IUser
}

const userRouter = Router();

const validator = ((req: Request, _res: Response, next: NextFunction) => {
  const {name, age, email, role, password} = req.body;
  const validator = new Validator({name, age, email, role, password});
  validator.valid;
  next()
});

const factoryUser = new Factory().userFactory()
userRouter.post('/user', validator, (req, res, next) => {
  factoryUser.create(req, res, next);
})

const factoryAdmin = new Factory().adminFactory();
userRouter.post('/admin', validator, (req, res, next) => {
  factoryAdmin.create(req, res, next);
});

export default userRouter;
