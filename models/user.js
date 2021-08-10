const { Model, DataTypes } = require("sequelize");
const passport = require("passport");
const sequelize = require("../config/connection");

class user extends Model {
  checkPassword(login) {
    return bcrypt.compareSync(login, this.password);
  }
}

user.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
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
});

module.exports = user;
