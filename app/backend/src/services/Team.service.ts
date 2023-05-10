import HttpException from '../utils/http.exception';
import TeamModel, { TeamAtrributes } from '../database/models/Team.model';

export default class TeamService {
  public static async getAll(): Promise<TeamAtrributes[]> {
    return TeamModel.findAll();
  }

  public static async getOne(id: number): Promise<TeamAtrributes> {
    const result = await TeamModel.findByPk(id);

    if (!result) throw new HttpException(404, 'There is no team with suck id!');

    return result;
  }
}
