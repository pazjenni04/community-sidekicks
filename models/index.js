const user = require('./user');
const VolunteerHours = require('./volunteer-hours')

user.hasMany(VolunteerHours, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

VolunteerHours.belongsTo(user, {
  foreignKey: 'user_id'
});

module.exports = { user, VolunteerHours };