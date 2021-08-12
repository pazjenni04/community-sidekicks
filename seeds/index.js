const sequelize = require('../config/connection');
const { user, VolunteerHours } = require('../models');

const userData = require('./user-seeds.json');
const volunteerHoursData = require('./volunteer-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await user.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const volunteer_hours of volunteerHoursData) {
    await VolunteerHours.create({
      ...volunteer_hours,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
