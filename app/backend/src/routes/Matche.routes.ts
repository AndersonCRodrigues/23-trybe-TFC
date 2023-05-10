import { Router } from 'express';
import MatchController from '../controllers/Match.controller';
import tokenVerify from '../middlewares/auth';

const matcheRouter = Router();

matcheRouter
  .get('/', MatchController.getAll)
  .patch('/:id/finish', tokenVerify, MatchController.finishMatch)
  .patch('/:id', tokenVerify, MatchController.update)
  .post('/', tokenVerify, MatchController.create);

export default matcheRouter;
