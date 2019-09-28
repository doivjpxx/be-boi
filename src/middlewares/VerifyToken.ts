import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Secret } from '../configs/secret';
import { HTTP_CODES } from '../configs/http-codes';

export default class VerifyToken {

  constructor() {
  }

  public async verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.access_token;
    if (!token) {
      return res.status(403).json({
        status: HTTP_CODES.ACCESS_DENIED,
        auth: false,
        message: 'Truy cập bị từ chối'
      });
    }

    const decoded = jwt.verify(token.toString(), Secret.code);
    if (!decoded) {
      return res.status(403).json({
        staus: HTTP_CODES.ACCESS_DENIED,
        auth: false,
        message: 'Token không hợp lệ'
      });
    }

    // @ts-ignore
    req.id = decoded.id;
    next();
  }

  public async verifyTokenAdmin(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.x_access_token;
    if (!token) {
      return res.status(403).json({
        status: HTTP_CODES.ACCESS_DENIED,
        auth: false,
        message: 'Truy cập bị từ chối'
      });
    }

    const decoded = jwt.verify(token.toString(), Secret.codeAdmin);
    if (!decoded) {
      return res.status(403).json({
        staus: HTTP_CODES.ACCESS_DENIED,
        auth: false,
        message: 'Token không hợp lệ'
      });
    }

    //  @ts-ignore
     req.idAdmin = decoded.id;
     next();
  }
}
