import { Response, Request, NextFunction } from "express";

interface Controller {
  create(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>
}

export default class LogError implements Controller {
  constructor(private controller: Controller) {
    this.controller = controller;
  }

  logError(error: string) {
    console.error(error)
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const retorno = await this.controller.create(req, res, next);
      return retorno;
    } catch (error: any) {
      this.logError(error.message)
      next(error)
    }
  }
}
