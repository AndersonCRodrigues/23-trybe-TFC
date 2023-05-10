import { Router } from 'express';
import TeamController from '../controllers/Team.controller';

const teamRouter = Router();

teamRouter
  .get('/', TeamController.getAll);
// .get('/:id', TeamController.getOne);

export default teamRouter;
