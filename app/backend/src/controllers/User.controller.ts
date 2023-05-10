import { Request, Response } from 'express';
import UserService from '../services/User.service';

export default class UserController {
  public static async login(req: Request, res: Response) {
    const token = await UserService.login(req.body);

    res.status(200).json({ token });
  }

  // public static async getRole(req: Request, res: Response) {
  //   let token = '';
  //   if (req.headers.authorization) token = req.headers.authorization;

  //   const role = await UserService.getRole(token);

  //   res.status(200).json({role});
  // }
}
