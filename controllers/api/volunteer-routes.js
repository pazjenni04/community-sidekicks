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

    res.render('volunteer-hours', {
      VolHours,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one gallery
router.get('/VolunteerHours/:id', async (req, res) => {
  try {
    const dbvolunteehoursData = await VolunteerHours.findByPk(req.params.id, {
      include: [
        {
          model: VolunteerHours,
          attributes: [
            'id',
            'name_organization',
            'description',
          ],
        },
      ],
    });

    const volunteerhours = dbvolunteehoursData.get({ plain: true });
    res.render('volunteerhours', { volunteerhours });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/user/:id', async (req, res) => {
  try {
    const dbuserData = await user.findByPk(req.params.id);

    const painting = dbuserData.get({ plain: true });

    res.render('user', { user });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;
