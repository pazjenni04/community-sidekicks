const router = require("express").Router();

const sequelize = require("../config/connection");
const { VolunteerHours, User } = require("../models");

// renders homepage
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login-page");
});

module.exports = router;
