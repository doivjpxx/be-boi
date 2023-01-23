import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';
import validationMiddleware from '../middlewares/validation.middleware';
import CreateUserDto from '../models/user/user.dto';
import authMiddleware from '../middlewares/auth.middleware';

export class AuthRoute {
  router: Router = Router();

  private authController = new AuthController();

  constructor() {
    this.routes();
  }

  public routes(): void {
    this.router.post('/login', this.authController.login);
    this.router.get('/logout', authMiddleware, this.authController.logout);
    this.router.get('/hello', this.authController.hello);
    this.router.post('/', validationMiddleware(CreateUserDto, 'create_user'), this.authController.registration);
  }
}
