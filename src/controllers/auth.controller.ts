import { NextFunction, Request, Response } from 'express';
import { logger } from '../helpers/logger.helper';
import { signup } from '../services/authentication.service';

export class AuthController {
  static _name = 'authController';

  public hello(req: Request, res: Response) {
    return res.end('Hello');
  }

  public async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await signup(req.body);
      res.send(user);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}
