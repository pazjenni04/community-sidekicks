const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const passport = require('passport');

class VolunteerHours extends Model {}

VolunteerHours.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name_organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'VolunteerHours',
  }
);



module.exports = VolunteerHours;
