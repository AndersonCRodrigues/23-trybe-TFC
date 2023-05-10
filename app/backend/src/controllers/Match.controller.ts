import { Request, Response } from 'express';
import MatchService from '../services/Match.service';

export default class MatchController {
  public static async getAll(req: Request, res: Response) {
    const result = await MatchService.getAll(
      req.query.inProgress as string,
    );

    res.status(200).json(result);
  }

  // public static async finishMatch(req: Request, res: Response) {
  //   await MatchService.finishMatch(+ req.params.id);

  //   res.status(200).json({message: "Finished"});
  // }

  // public static async update(req: Request, res: Response) {
  //   await MatchService.update(+req.params.id, req.body);

  //   res.status(200).json();
  // }

  // public static async create(req: Request, res: Response) {
  //   const result = await MatchService.create(req.body);

  //   res.status(201).json(result);
  // }

  // public static async leaderBoard(req: Request, res: Response) {

  //   const param = req.path.split('/')[2];

  //   const result = await MatchService.leaderBoard(param);

  //   res.status(200).json(result);
  // }
}
