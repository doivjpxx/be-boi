import { NextFunction, Request, Response } from 'express';
import { logger } from '../helpers/logger.helper';
import { login, signout, signup } from '../services/auth.service';

interface RequestWithUser extends Request {
  user: any;
}

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

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await login(req.body);
      res.cookie('Authorization', data.token, {
        maxAge: 2592000,
        httpOnly: true,
      });
      res.send(data);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async logout(req: RequestWithUser, res: Response) {
    res.clearCookie('Authorization');
    const data = await signout();
    res.send(data);
    res.end();
  }
}
