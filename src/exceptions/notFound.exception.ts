import HTTP_CODES from '../configs/http-codes';
import HttpException from './http.exception';

class NotFoundException extends HttpException {
  constructor(bindName: string) {
    super(HTTP_CODES.NOT_FOUND, 'Resource doesn\'t exist', bindName);
  }
}

export default NotFoundException;
