const router = require("express").Router();
const sequelize = require("../../config/connection");
const Volunteer = require("../../models/volunteer");
const Organization = require("../../models/organization");
const withAuth = require("../../utils/helpers");

//create new volunteer
router.post("/", async (req, res) => {
  try {
    const newVolunteer = await Volunteer.create(req.body);

    res.status(200).json(newVolunteer);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET all volunteers for account
router.get("/", withAuth, async (req, res) => {
  try {
    const dbvolunteersData = await Volunteer.findAll();

    const allVolunteers = dbvolunteersData.map((volunteers) =>
      volunteers.get({ plain: true })
    );

    res.render("volunteers", {
      allVolunteers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//renders all volunteers in the system from volunteer form
router.get("/all", async (req, res) => {
  try {
    const allVolunteers = await Volunteer.findAll();

    const volunteers = allVolunteers.map((project) =>
      project.get({ plain: true })
    );

    res.render("volunteers", {
      volunteers,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// GET volunteers based on zip code
router.get("/zip", async (req, res) => {
  try {
    const dbvolunteersData = await Volunteer.findByPk(req.params.id, {
      include: [
        {
          model: Volunteer,
          where: { zip_code: req.body.zip_code },
        },
      ],
    });

    const volunteerAvailable = dbvolunteersData.get({ plain: true });
    res.render("volunteers", {
      volunteerAvailable,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
