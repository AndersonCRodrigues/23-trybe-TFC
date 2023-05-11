const allMatches = [
  {
      "id": 1,
      "homeTeamId": 16,
      "homeTeamGoals": 1,
      "awayTeamId": 8,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
          "teamName": "São Paulo"
      },
      "awayTeam": {
          "teamName": "Grêmio"
      }
  },
  {
      "id": 2,
      "homeTeamId": 9,
      "homeTeamGoals": 1,
      "awayTeamId": 14,
      "awayTeamGoals": 1,
      "inProgress": false,
      "homeTeam": {
          "teamName": "Internacional"
      },
      "awayTeam": {
          "teamName": "Santos"
      }
  },
  {
      "id": 3,
      "homeTeamId": 4,
      "homeTeamGoals": 3,
      "awayTeamId": 11,
      "awayTeamGoals": 0,
      "inProgress": false,
      "homeTeam": {
          "teamName": "Corinthians"
      },
      "awayTeam": {
          "teamName": "Napoli-SC"
      }
  },
];

const oneMatch =  {
  "id": 1,
  "homeTeamId": 16,
  "homeTeamGoals": 1,
  "awayTeamId": 8,
  "awayTeamGoals": 1,
  "inProgress": false,
  "homeTeam": {
      "teamName": "São Paulo"
  },
  "awayTeam": {
      "teamName": "Grêmio"
  }
};

const createMatch = {
    "homeTeamId": 16,
    "awayTeamId": 8,
    "homeTeamGoals": 2,
    "awayTeamGoals": 2,
};

const returnCreatedMatch = {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 2,
    "awayTeamId": 8,
    "awayTeamGoals": 2,
    "inProgress": true,
};

const changedCreatedMatch = {
    "id": 1,
    "homeTeamId": 16,
    "homeTeamGoals": 3,
    "awayTeamId": 8,
    "awayTeamGoals": 1,
    "inProgress": true,
};

const matchUpdate = {
    "homeTeamGoals": 3,
    "awayTeamGoals": 1,
    save: () => {}
};

const matchLeaderBoard = [
    {
        "name": "Santos",
        "totalPoints": 9,
        "totalGames": 3,
        "totalVictories": 3,
        "totalDraws": 0,
        "totalLosses": 0,
        "goalsFavor": 9,
        "goalsOwn": 3,
        "goalsBalance": 6,
        "efficiency": 100
    },
    {
        "name": "Palmeiras",
        "totalPoints": 7,
        "totalGames": 3,
        "totalVictories": 2,
        "totalDraws": 1,
        "totalLosses": 0,
        "goalsFavor": 10,
        "goalsOwn": 5,
        "goalsBalance": 5,
        "efficiency": 77.78
    },
    {
        "name": "Corinthians",
        "totalPoints": 6,
        "totalGames": 2,
        "totalVictories": 2,
        "totalDraws": 0,
        "totalLosses": 0,
        "goalsFavor": 6,
        "goalsOwn": 1,
        "goalsBalance": 5,
        "efficiency": 100
    },
];

export { allMatches, oneMatch, createMatch, returnCreatedMatch, matchUpdate, matchLeaderBoard, changedCreatedMatch };