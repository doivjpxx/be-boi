import { Router } from 'express';
import { DemoRoute } from './demos';

export class RootRouter {
  router: Router = Router();

  private demoRoute: DemoRoute = new DemoRoute();

  constructor() {
    this.routes();
  }

  public routes() {
    this.router.use('/demo', this.demoRoute.router);
  }
}
