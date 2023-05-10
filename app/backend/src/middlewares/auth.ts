import { NextFunction, Request, Response } from 'express';
import HttpException from '../utils/http.exception';
import { verifyToken } from '../utils/auth';

const tokenVerify = (req: Request, _res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    throw new HttpException(401, 'Token not found');
  }

  const validate = verifyToken(req.headers.authorization);

  if (validate.message) {
    throw new HttpException(401, validate.message);
  }

  next();
};

export default tokenVerify;
