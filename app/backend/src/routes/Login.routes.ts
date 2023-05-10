import { Router } from 'express';
import UserController from '../controllers/User.controller';
// import tokenVerify from '../middlewares/auth';

const loginRouter = Router();

loginRouter
  .post('/', UserController.login);
// .get('/role', tokenVerify, UserController.getRole);

export default loginRouter;
