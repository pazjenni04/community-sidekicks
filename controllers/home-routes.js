const router = require("express").Router();
const sequelize = require("../config/connection");
const { Volunteer, Organization } = require("../models");

// renders homepage
router.get("/", async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// volunteer-signup form
router.get("/volunteerSignup", (req, res) => {
  try {
  res.render("volunteer-signup");
}catch (err) {
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

//logs org out
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", async (req, res) => {
  try {
    console.log(req.session.user_id)
    // Find the logged in organization based on the session ID
    const orgData = await Organization.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const organization = orgData.get({ plain: true });

    res.render("organization", {
      ...organization,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//add route for logout
module.exports = router;
