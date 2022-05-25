import { NextFunction, Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import InvalidTokenException from '../exceptions/invalidToken.exception';
import { userModel, IUser } from '../models/user/user.model';

async function authMiddleware(
  request: Request & { user: IUser },
  response: Response,
  next: NextFunction,
) {
  const cookies = request.cookies;
  if (cookies && cookies.Authorization) {
    const secret = process.env.JWT_SECRET;
    try {
      const verificationResponse = jwt.verify(cookies.Authorization, secret) as { _id: string };
      const id = verificationResponse._id;
      const user = await userModel.findById(id);
      if (user) {
        request.user = user;
        next();
      } else {
        next(new InvalidTokenException());
      }
    } catch (error) {
      next(new InvalidTokenException());
    }
  } else {
    next(new InvalidTokenException());
  }
}

export default authMiddleware;
