import { Router } from 'express';
import MatchController from '../controllers/Match.controller';

const leaderBoardRouter = Router();

leaderBoardRouter
  .get('/', MatchController.leaderBoard)
  .get('/home', MatchController.leaderBoard)
  .get('/away', MatchController.leaderBoard);

export default leaderBoardRouter;
