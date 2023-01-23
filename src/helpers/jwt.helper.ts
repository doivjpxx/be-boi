import { sign, SignOptions, verify } from 'jsonwebtoken';

export const jwtSign = (payload: string | Buffer | object, secret: string, options: SignOptions) =>
  sign(payload, secret, options);

export const jwtVerify = (token: string, secret: string) => verify(token, secret);
