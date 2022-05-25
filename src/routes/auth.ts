import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';
import validationMiddleware from '../middlewares/validation.middleware';
import CreateUserDto from '../models/user/user.dto';

export class AuthRoute {
  router: Router = Router();

  private authController = new AuthController();

  constructor() {
    this.routes();
  }

  public routes(): void {
    this.router.get('/hello', this.authController.hello);
    this.router.post('/', validationMiddleware(CreateUserDto), this.authController.registration);
  }
}
