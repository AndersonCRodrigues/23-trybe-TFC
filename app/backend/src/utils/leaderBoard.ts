import { MatchAtrributes } from '../database/models/Match.models';
import { TeamAtrributes } from '../database/models/Team.model';

export type Board = {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
};

class LeaderBoard {
  private name: string;
  private declare totalPoints: number;
  private declare totalGames: number;
  private declare totalVictories: number;
  private declare totalDraws: number;
  private declare totalLosses: number;
  private declare goalsFavor: number;
  private declare goalsOwn: number;
  private declare goalsBalance: number;
  private declare efficiency: number;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  private contator(timeA: number, timeB: number): void {
    this.goalsOwn += timeB;
    this.goalsFavor += timeA;
    if (timeA > timeB) {
      this.totalPoints += 3;
      this.totalVictories += 1;
    } else if (timeA === timeB) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    } else {
      this.totalLosses += 1;
    }
  }

  private modelo(): Board {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: +this.efficiency.toFixed(2),
    };
  }

  private setEfficiency(): void {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private setGoalBalance(): void {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public getBoard(id: number, games: MatchAtrributes[]): Board {
    this.totalGames = games.length;
    games.forEach((e) => {
      if (e.homeTeamId === id) this.contator(e.homeTeamGoals, e.awayTeamGoals);
      else this.contator(e.awayTeamGoals, e.homeTeamGoals);
    });

    this.setEfficiency();
    this.setGoalBalance();
    return this.modelo();
  }
}

const createLeaderBoard = (
  teams: TeamAtrributes[],
  matches: MatchAtrributes[],
  params: string,
): Board[] => {
  const result = teams.map((t) => {
    const team = new LeaderBoard(t.teamName);
    if (params === 'home') {
      return team.getBoard(t.id, matches.filter((m) =>
        m.homeTeamId === t.id));
    } if (params === 'away') {
      return team.getBoard(t.id, matches.filter((m) =>
        m.awayTeamId === t.id));
    }
    return team.getBoard(t.id, matches.filter((m) =>
      m.awayTeamId === t.id || m.homeTeamId === t.id));
  });
  return result;
};

export { createLeaderBoard, LeaderBoard };
