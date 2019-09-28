import { DemoControllers } from '../controllers/DemoControllers';
import { Router } from 'express';
import VerifyToken from '../middlewares/VerifyToken';

export class DemoRoute {

  router: Router = Router();
  verifyToken: VerifyToken = new VerifyToken();

  private demoController: DemoControllers = new DemoControllers();

  constructor() {
    this.routes();
  }

  public routes(): void {
    this.router.get('/', this.demoController.getDemo);
    this.router.get('/access_token', this.verifyToken.verifyToken, this.demoController.getDemo);
    this.router.post('/add', this.demoController.addDemo);
  }
}
