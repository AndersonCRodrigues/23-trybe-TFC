import { Request, Response } from 'express';
import TeamService from '../services/Team.service';

export default class TeamController {
  public static async getAll(req: Request, res: Response) {
    const result = await TeamService.getAll();
    res.status(200).json(result);
  }

  // public static async getOne(req: Request, res: Response) {
  //   const {id} = req.params;

  //   const result = await TeamService.getOne(+ id);

  //   res.status(200).json(result);
  // }
}
