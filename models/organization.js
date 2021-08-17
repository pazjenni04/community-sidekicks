//organization login

const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Organization extends Model {
  checkPassword(login) {
    return bcrypt.compareSync(login, this.password);
  }
}

Organization.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    organization_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },

  {
    hooks: {
      beforeCreate: async (newOrgData) => {
        newOrgData.password = await bcrypt.hash(newOrgData.password, 10);
        return newOrgData;
      },
      beforeUpdate: async (updatedOrgData) => {
        updatedOrgData.password = await bcrypt.hash(
          updatedOrgData.password,
          10
        );
        return updatedOrgData;
      },
    },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "organization",
  }
);

module.exports = Organization;
