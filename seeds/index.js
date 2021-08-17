const sequelize = require("../config/connection");
const { Organization, Volunteer } = require("../models");

const orgData = require("./org-seeds.json");
const volData = require("./volunteer-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const organization = await Organization.bulkCreate(orgData, {
    individualHooks: true,
    returning: true,
  });

  const volunteer = await Volunteer.bulkCreate(volData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
