import { NextFunction, Request, Response } from 'express';
import { createRental } from '../services/rental.service';
import { logger } from '../helpers/logger.helper';

export class RentalController {
  static _name = 'rentalController';

  public async addRental(req: Request, res: Response, next: NextFunction) {
    try {
      const rental = await createRental(req.body);
      res.send(rental);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }
}
