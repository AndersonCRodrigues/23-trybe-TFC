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
  efficieny: number;
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
  private declare efficieny: number;

  constructor(name: string) {
    this.name = name;
  }

  private contator(timeA: number, timeB: number): void {
    this.goalsOwn += timeA;
    this.goalsFavor += timeB;

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
      efficieny: +this.efficieny.toFixed(2),
    };
  }

  private setEfficieny(): void {
    this.efficieny = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private setGoalBalance(): void {
    this.goalsBalance = this.goalsOwn - this.goalsFavor;
  }

  public getBoard(id: number, games: MatchAtrributes[]): Board {
    this.totalGames = games.length;

    games.forEach((e) => {
      if (e.homeTeamId === id) this.contator(e.homeTeamGoals, e.awayTeamGoals);
      else this.contator(e.awayTeamGoals, e.homeTeamGoals);
    });

    this.setEfficieny();
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

// .sort((a, b) =>
// a.totalVictories - b.totalVictories
// && a.goalsBalance - b.goalsBalance
// && a.goalsOwn - b.goalsOwn);
