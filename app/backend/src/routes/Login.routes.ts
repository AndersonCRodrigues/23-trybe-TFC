import { Router } from 'express';
import tokenVerify from '../middlewares/auth';
import userLoginVerify from '../middlewares/verifyUser';
import UserController from '../controllers/User.controller';

const loginRouter = Router();

loginRouter
  .post('/', userLoginVerify, UserController.login)
  .get('/role', tokenVerify, UserController.getRole);

export default loginRouter;
