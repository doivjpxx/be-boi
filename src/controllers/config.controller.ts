import { createConfig, updateConfig } from '../services/config.service';
import HTTP_CODES from '../configs/http-codes';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../helpers/logger.helper';

export class ConfigController {
  static _name = 'configController';

  public async createConfig(req: Request, res: Response, next: NextFunction) {
    try {
      const config = await createConfig(req.body);
      res.status(HTTP_CODES.CREATED).send(config);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async updateConfig(req: Request, res: Response, next: NextFunction) {
    try {
      const config = await updateConfig(req.body);
      res.status(HTTP_CODES.SUCCESS).send(config);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}
