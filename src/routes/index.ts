import { Router } from 'express';
import { AuthRoute } from './auth';
import { CustomerRoute } from './customer';
import { RentalRoute } from './rental';
import { RoomRoute } from './room';
import { ConfigRoute } from './config';
import authMiddleware from '../middlewares/auth.middleware';

export class RootRouter {
  router: Router = Router();

  private authRoute: AuthRoute = new AuthRoute();
  private customerRoute: CustomerRoute = new CustomerRoute();
  private rentalRoute: RentalRoute = new RentalRoute();
  private roomRoute: RoomRoute = new RoomRoute();
  private configRoute: ConfigRoute = new ConfigRoute();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.use('/auth', this.authRoute.router);
    this.router.use('/customer', authMiddleware, this.customerRoute.router);
    this.router.use('/rental', authMiddleware, this.rentalRoute.router);
    this.router.use('/room', authMiddleware, this.roomRoute.router);
    this.router.use('/config', authMiddleware, this.configRoute.router);
  }
}
