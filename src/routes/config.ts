import { Router } from 'express';
import { ConfigController } from '../controllers/config.controller';

export class ConfigRoute {
  router: Router = Router();

  private configController = new ConfigController();

  constructor() {
    this.routes();
  }

  private routes() {
    this.router.post('/', this.configController.createConfig);
    this.router.put('/', this.configController.updateConfig);
  }
}
