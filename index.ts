import express, {NextFunction, Request, Response} from 'express';

import {AdminController, UserController} from './controllers/user.controller';

const app = express();

app.use(express.json());

app.post('/user', (req, res, next) => {
  new UserController().create(req, res, next);
})

app.post('/admin', (req, res, next) => {
  new AdminController().create(req, res, next);
})

app.use((
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(400).json({ error: err.message })
})
