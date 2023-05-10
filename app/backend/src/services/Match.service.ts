import MatchModel,
{
  MatchAtrributes,
  // MatchCreateAtrributes,
} from '../database/models/Match.models';
import TeamModel from '../database/models/Team.model';
import HttpException from '../utils/http.exception';
// import { createLeaderBoard } from '../utils/leaderBoard';
// import TeamService from './Team.service';

// type update = {
//   homeTeamGoals: number;
//   awayTeamGoals: number;
// };

export default class MatchService {
  public static async getAll(inProgress: string | undefined): Promise<MatchAtrributes[]> {
    let result = await MatchModel.findAll({
      include: [
        { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
        { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    if (inProgress) {
      result = result.filter((e: { inProgress: boolean; }) =>
        e.inProgress === (inProgress === 'true'));
    }

    return result;
  }

  public static async finishMatch(id: number): Promise<void> {
    const result = await MatchModel.findByPk(id);
    if (!result) throw new HttpException(400, 'Matche not found');
    result.inProgress = false;
    result.save();
  }

  // public static async update(
  //   id: number,
  //   {
  //     homeTeamGoals,
  //     awayTeamGoals,
  //   }: update,
  // ): Promise<void> {
  //   const result = await MatchModel.findByPk(id);
  //   if (!result) throw new HttpException(400, 'Match not found');
  //   result.awayTeamGoals = awayTeamGoals;
  //   result.homeTeamGoals = homeTeamGoals;
  //   result.save();
  // }

  // public static async create(params: MatchCreateAtrributes): Promise<MatchAtrributes> {
  //   if (params.awayTeamId === params.homeTeamId) {
  //     throw new HttpException(422, 'It is not possible to create a match with two equal teams');
  //   }
  //   await TeamService.getOne(params.homeTeamId);
  //   await TeamService.getOne(params.awayTeamId);

  //   const result = MatchModel.create(params);
  //   return result;
  // }

  // public static async leaderBoard(param: string) {
  //   const teams = await TeamService.getAll();
  //   const matches = await this.getAll('true');
  //   return createLeaderBoard(teams, matches, param);
  // }
}
