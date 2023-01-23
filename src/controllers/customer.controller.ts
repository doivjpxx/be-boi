import { NextFunction, Request, Response } from 'express';
import { createCustomer, detailCustomerById } from '../services/customer.service';
import { logger } from '../helpers/logger.helper';
import HTTP_CODES from '../configs/http-codes';

export class CustomerController {
  static _name = 'customerController';

  public async addCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const customer = await createCustomer(req.body);
      res.status(HTTP_CODES.CREATED).send(customer);
    } catch (e) {
      logger.error(e);
      next(e);
    }
  }

  public async getCustomerById(req: Request, res: Response) {
    const customer = await detailCustomerById(req.params.id);
    res.status(HTTP_CODES.SUCCESS).send(customer);
  }
}
