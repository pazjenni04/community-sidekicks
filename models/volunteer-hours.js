const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const passport = require('passport');
const VolunteerHours = require('./volunteer-hours');


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
      type: DataTypes.STRING,
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



module.exports = { VolunteerHours };
