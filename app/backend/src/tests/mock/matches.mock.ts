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
export { allMatches, oneMatch, createMatch, returnCreatedMatch };