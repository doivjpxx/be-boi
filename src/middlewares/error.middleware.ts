import HttpException from '../exceptions/http.exception';
import { NextFunction, Request, Response } from 'express';

function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const code = error.code || 'error';
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  return response.status(status).json({
    code,
    status,
    message,
  });
}

export default errorMiddleware;
