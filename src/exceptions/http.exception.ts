import CODES from '../configs/http-codes';

type Keys = keyof typeof CODES;

class HttpException extends Error {
  code: string;
  status: typeof CODES[Keys];
  message: string;
  constructor(status: number, message: string, code: string) {
    super(message);
    this.code = code;
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
