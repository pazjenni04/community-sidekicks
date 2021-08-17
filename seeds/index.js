const sequelize = require('../config/connection');
const { Organization, Volunteer } = require('../models');

const orgData = require('./Org-seeds.json');
const volData = require('./volunteer-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const organizations = await Volunteer.bulkCreate(orgData, {
    individualHooks: true,
    returning: true,
  });

  for (const volunteer_data of volData
  ) {
    await Volunteer.create({
      ...volunteer_data
,
      user_id: organization[Math.floor(Math.random() * organization.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
