import { AuthController } from '../controllers/auth.controller';
import NotFoundException from '../exceptions/notFound.exception';
import { jwtSign } from '../helpers/jwt.helper';
import UserEmailAlreadyExistsException from '../exceptions/emailAlreadyExists.exception';
import { compare, hash } from '../helpers/crypt.helper';
import CreateUserDto from '../models/user/user.dto';
import { userModel } from '../models/user/user.model';
import LoginUserInvalidException from '../exceptions/loginUserInvalid.exception';

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

export const login = async ({ email, password }) => {
  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    throw new NotFoundException(AuthController._name);
  }

  if (compare(password, user.password)) {
    const token = jwtSign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.SECRET,
      {
        expiresIn: 2592000, // expires in 24 hours
      },
    );

    const data = {
      auth: true,
      token,
    };

    if (!data.token || data.token === '') {
      throw new LoginUserInvalidException();
    }

    return data;
  }
};

export const signout = async () => {
  const data = {
    auth: false,
    token: null,
  };

  return data;
};
