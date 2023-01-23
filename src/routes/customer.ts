import { CustomerController } from '../controllers/customer.controller';
import { Router } from 'express';

export class CustomerRoute {
  router: Router = Router();

  private customerController = new CustomerController();

  constructor() {
    this.routes();
  }

  private routes() {
    this.router.get('/:id', this.customerController.getCustomerById);
    this.router.post('/', this.customerController.addCustomer);
  }
}
