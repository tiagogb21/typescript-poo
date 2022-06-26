import {Response, Request, NextFunction} from 'express';
import {IUser} from '../interfaces/user.interface';

interface Service {
  create(data: Omit<IUser, 'id'>): IUser
}

export default class UserController {
  constructor(private service: Service) {
    this.service = service;
  }

  async create(req: Request, res: Response, next: NextFunction) {
      const user = await this.service.create(req.body);
      return res.status(201).json({ user });
  }
}

// export class UserController {
//   constructor(private service: Service) {
//     this.service = service;
//   }

//   async create(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     try {
//       const user = await this.service.create(req.body)
//       return res.status(201).json({ user })
//     } catch (error) {
//       next(error)
//     }
//   }
// }

// export class AdminController {
//   async create(
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) {
//     try {
//       const adminService = new AdminService();
//       const admin = await adminService
//         .create(req.body, req.headers.authorization || 'Invalid token!');
//       return res.status(201).json({ admin })
//     } catch (error) {
//       next(error)
//     }
//   }
// }
