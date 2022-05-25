import UserEmailAlreadyExistsException from '../exceptions/emailAlreadyExists.exception';
import { hash } from '../helpers/crypt.helper';
import CreateUserDto from '../models/user/user.dto';
import { userModel } from '../models/user/user.model';

export const signup = async ({ name, email, password }: CreateUserDto) => {
  const existUser = await userModel.findOne({
    email,
  });

  if (existUser) {
    throw new UserEmailAlreadyExistsException(email);
  }

  const hashedPassword = hash(password);
  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  user.password = undefined;

  return user;
};
