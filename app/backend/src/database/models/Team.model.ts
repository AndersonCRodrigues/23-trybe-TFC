import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface TeamAtrributes {
  id: number;
  teamName: string;
}

export type TeamCreateAttr = Omit<TeamAtrributes, 'id'>;

class TeamModel extends Model<TeamAtrributes, TeamCreateAttr> {
  declare id: number;
  declare teamName: string;
}

TeamModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  tableName: 'teams',
  sequelize,
  timestamps: false,
  underscored: true,
});

export default TeamModel;
