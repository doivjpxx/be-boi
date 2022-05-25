import { Router } from 'express';
import { AuthRoute } from './auth';

export class RootRouter {
  router: Router = Router();

  private authRoute: AuthRoute = new AuthRoute();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.use('/auth', this.authRoute.router);
  }
}
