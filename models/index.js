const User = require("./user"); //organization
const VolunteerHours = require("./volunteer-hours"); //creating volunteer 

User.hasMany(VolunteerHours, {
  foreignKey: "VolunteerHours.id",
  onDelete: "CASCADE",
});

module.exports = { User, VolunteerHours };
