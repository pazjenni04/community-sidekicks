const Organization = require("./organization"); //organization route
const Volunteer = require("./volunteer"); //volunteer route

Organization.hasMany(Volunteer, {
  foreignKey: "Volunteer.id",
  onDelete: "CASCADE",
});

module.exports = { Organization, Volunteer };
