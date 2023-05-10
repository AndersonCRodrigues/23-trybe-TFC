import { compare } from 'bcryptjs';
import UserModel from '../database/models/User.model';
import { createToken } from '../utils/auth';
import HttpException from '../utils/http.exception';

export type Login = {
  email: string;
  password: string;
};

export default class UserService {
  public static async login({ email, password }: Login): Promise<string> {
    const user = await UserModel.findOne({ where: { email } });

    if (!user) throw new HttpException(401, 'Invalid email or password');
    const checkPassword = await compare(password, user.password);
    if (!checkPassword) throw new HttpException(401, 'Invalid email or password');

    return createToken(user.id);
  }

  // public static async getRole(token: string) {
  //   const userId = decodeToken(token).id;
  //   const user = await UserModel.findByPk(userId);

  //   return user?.role;
  // }
}
