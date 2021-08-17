const router = require("express").Router();
const sequelize = require("../../config/connection");
const Volunteer = require("../../models/volunteer");
const User = require("../../models/organization");

<<<<<<< HEAD
const sequelize = require("../config/connection");
const { VolunteerHours, user } = require("../models");

// GET all volunteerhours for homepage
=======
// GET all volunteers for account
>>>>>>> main
router.get("/", async (req, res) => {
  try {
    const dbvolunteersData = await Volunteer.findAll();

    const allVolunteers = dbvolunteersData.map((volunteers) =>
      volunteers.get({ plain: true })
    );

<<<<<<< HEAD
    res.render("volunteer-hours", {
      VolHours,
=======
    res.render("volunteers", {
      allVolunteers,
>>>>>>> main
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

<<<<<<< HEAD
// GET one gallery
router.get("/VolunteerHours/:id", async (req, res) => {
  try {
    const dbvolunteehoursData = await VolunteerHours.findByPk(req.params.id, {
      include: [
        {
          model: VolunteerHours,
          attributes: ["id", "name_organization", "description"],
        },
      ],
    });

    const volunteerhours = dbvolunteehoursData.get({ plain: true });
    res.render("volunteerhours", { volunteerhours });
=======
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
>>>>>>> main
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

<<<<<<< HEAD
// GET one painting
router.get("/user/:id", async (req, res) => {
=======
// GET one volunteer
router.get("/:id", async (req, res) => {
>>>>>>> main
  try {
    const dbvolunteersData = await Volunteer.findByPk(req.params.id, {
      include: [
        {
          model: Volunteer,
          where: { first_name: req.body.first_name },
        },
      ],
    });

<<<<<<< HEAD
    res.render("user", { user });
=======
    const volunteerAvailable = dbvolunteersData.get({ plain: true });
    res.render("volunteers", {
      volunteersAvailable,
      logged_in: req.session.logged_in,
    });
>>>>>>> main
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
