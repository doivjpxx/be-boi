import HTTP_CODES from '../configs/http-codes';
import HttpException from './http.exception';

class InvalidTokenException extends HttpException {
  constructor() {
    super(HTTP_CODES.ACCESS_DENIED, 'Token is invalid', 'auth');
  }
}

export default InvalidTokenException;
