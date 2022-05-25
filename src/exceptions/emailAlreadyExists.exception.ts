import HTTP_CODES from '../configs/http-codes';
import HttpException from './http.exception';

class UserEmailAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(HTTP_CODES.CLIENT_ERROR, `User with email ${email} already exists`, 'auth');
  }
}

export default UserEmailAlreadyExistsException;
