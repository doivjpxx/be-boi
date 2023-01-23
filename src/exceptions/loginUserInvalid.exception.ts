import HTTP_CODES from '../configs/http-codes';
import HttpException from './http.exception';

class LoginUserInvalidException extends HttpException {
  constructor() {
    super(HTTP_CODES.CLIENT_ERROR, `Credential is invalid ${HTTP_CODES.CLIENT_ERROR}`, 'auth');
  }
}

export default LoginUserInvalidException;