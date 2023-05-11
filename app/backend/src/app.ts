import * as express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import teamRouter from './routes/Teams.routes';
import loginRouter from './routes/Login.routes';
import matcheRouter from './routes/Matche.routes';
import leaderBoardRouter from './routes/LeadersBoard.routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);

    // routes
    this.app.use('/teams', teamRouter);
    this.app.use('/login', loginRouter);
    this.app.use('/matches', matcheRouter);
    this.app.use('/leaderboard', leaderBoardRouter);

    // middleware de error
    this.app.use(errorHandler);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
