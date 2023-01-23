import { Router } from 'express';
import { RentalController } from '../controllers/rental.controller';

export class RentalRoute {
  router: Router = Router();

  private rentalController = new RentalController();

  constructor() {
    this.routes();
  }

  private routes() {
    this.router.post('/', this.rentalController.addRental);
  }
}
