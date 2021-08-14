const User = require("./user");
const VolunteerHours = require("./volunteer-hours");

User.hasMany(VolunteerHours, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

VolunteerHours.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, VolunteerHours };
