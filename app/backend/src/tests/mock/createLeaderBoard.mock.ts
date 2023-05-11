const dataHome = [
    {
    "efficiency": 100,
    "goalsBalance": 2,
    "goalsFavor": 2,
    "goalsOwn": 0,
    "name": "Avaí/Kindermann",
    "totalDraws": 0,
    "totalGames": 1,
    "totalLosses": 0,
    "totalPoints": 3,
    "totalVictories": 1,
    },
    {
    "efficiency": NaN,
    "goalsBalance": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "name": "Bahia",
    "totalDraws": 0,
    "totalGames": 0,
    "totalLosses": 0,
    "totalPoints": 0,
    "totalVictories": 0,
    },
];

const dataAway = [
    {
    "efficiency": NaN,
    "goalsBalance": 0,
    "goalsFavor": 0,
    "goalsOwn": 0,
    "name": "Avaí/Kindermann",
    "totalDraws": 0,
    "totalGames": 0,
    "totalLosses": 0,
    "totalPoints": 0,
    "totalVictories": 0,
    },
    {
    "efficiency": 0,
    "goalsBalance": -2,
    "goalsFavor": 0,
    "goalsOwn": 2,
    "name": "Bahia",
    "totalDraws": 0,
    "totalGames": 1,
    "totalLosses": 1,
    "totalPoints": 0,
    "totalVictories": 0,
    },
];

const dataNoParams = [
    {
    "efficiency": 100,
    "goalsBalance": 2,
    "goalsFavor": 2,
    "goalsOwn": 0,
    "name": "Avaí/Kindermann",
    "totalDraws": 0,
    "totalGames": 1,
    "totalLosses": 0,
    "totalPoints": 3,
    "totalVictories": 1,
    },
    {
    "efficiency": 0,
    "goalsBalance": -2,
    "goalsFavor": 0,
    "goalsOwn": 2,
    "name": "Bahia",
    "totalDraws": 0,
    "totalGames": 1,
    "totalLosses": 1,
    "totalPoints": 0,
    "totalVictories": 0,
    },
];

const allMatchesTrue = [
    {
        "id": 41,
        "homeTeamId": 1,
        "homeTeamGoals": 2,
        "awayTeamId": 2,
        "awayTeamGoals": 0,
        "inProgress": true,
        "homeTeam": {
            "teamName": "São Paulo"
        },
        "awayTeam": {
            "teamName": "Internacional"
        }
    },
];

const allTeamsBoard = [
    {
        "id": 1,
        "teamName": "Avaí/Kindermann"
    },
    {
        "id": 2,
        "teamName": "Bahia"
    },
];

export {dataHome, allMatchesTrue , allTeamsBoard, dataAway, dataNoParams}