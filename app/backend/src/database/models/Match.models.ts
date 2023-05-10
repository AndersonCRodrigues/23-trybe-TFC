import { DataTypes, Model } from 'sequelize';
import sequelize from '.';
import TeamModel from './Team.model';

export interface MatchAtrributes {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export type MatchCreateAtrributes = {
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
};

class MatchModel extends Model<MatchAtrributes, MatchCreateAtrributes> {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

MatchModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  homeTeamGoals: DataTypes.INTEGER,
  awayTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
  },
  awayTeamGoals: DataTypes.INTEGER,
  inProgress: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'matches',
  sequelize,
  timestamps: false,
  underscored: true,
});

TeamModel.hasMany(MatchModel, {
  foreignKey: 'homeTeamId',
  as: 'home_team',
});

TeamModel.hasMany(MatchModel, {
  foreignKey: 'awayTeamId',
  as: 'away_team',
});

MatchModel.belongsTo(TeamModel, {
  foreignKey: 'homeTeamId',
  as: 'homeTeam',
});

MatchModel.belongsTo(TeamModel, {
  foreignKey: 'awayTeamId',
  as: 'awayTeam',
});

export default MatchModel;
