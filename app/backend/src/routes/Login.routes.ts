import { Router } from 'express';
import userLoginVerify from '../middlewares/verifyUser';
import UserController from '../controllers/User.controller';
// import tokenVerify from '../middlewares/auth';

const loginRouter = Router();

loginRouter
  .post('/', userLoginVerify, UserController.login);
// .get('/role', tokenVerify, UserController.getRole);

export default loginRouter;
