import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import HTTP_CODES from '../configs/http-codes';
import * as express from 'express';
import HttpException from '../exceptions/http.exception';

function validationMiddleware<T>(type: any, name: string): express.RequestHandler {
  return (req, res, next) => {
    validate(plainToInstance(type, req.body)).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors
          .map((error: ValidationError) => Object.values(error.constraints))
          .join(', ');
        next(new HttpException(HTTP_CODES.CLIENT_ERROR, message, name));
      } else {
        next();
      }
    });
  };
}

export default validationMiddleware;
