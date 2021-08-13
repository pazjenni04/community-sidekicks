const router = require("express").Router();

const sequelize = require('../config/connection');
const { VolunteerHours, user } = require('../models');

// GET all volunteerhours for homepage
router.get('/', async (req, res) => {
  try {
    const dbvolunteerhoursData = await VolunteerHours.findAll({
      // include: [
      //   {
      //     model: VolunteerHours,
      //     attributes: ['name_organization', 'description',],
      //   },
      // ],
    });

    const VolHours = dbvolunteerhoursData.map((VolunteerHours) =>
      VolunteerHours.get({ plain: true })
    );

    res.render('home');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
