import { Request, NextFunction, Response } from 'express';
import loginSchema from '../joi/user.joi';
import HttpException from '../utils/http.exception';

const userLoginVerify = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    throw new HttpException(400, 'All fiels must br filled');
  }

  const { error } = loginSchema.validate(req.body);

  if (error) throw new HttpException(401, 'Invalid email or password');

  next();
};

export default userLoginVerify;
