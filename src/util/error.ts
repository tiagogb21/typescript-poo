import {Response, Request, NextFunction} from 'express';

export default class Error {
  message(
    err: Error,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    res.status(400).json({ error: err.message })
  }
}
