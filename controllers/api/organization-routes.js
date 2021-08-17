const router = require("express").Router();
const { User } = require("../../models");
const Organization = require("../../models/organization");
// const withAuth = require('../../utils/auth');

//creates organization account
router.post("/", async (req, res) => {
  try {
    const orgData = await Organization.create(req.body);

    req.session.save(() => {
      req.session.user_id = orgData.id;
      req.session.logged_in = true;

      res.status(200).json(orgData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

//logs into organization account
router.post("/login", async (req, res) => {
  try {
    const orgData = await Organization.findOne({
      where: { email: req.body.email },
    });
    console.log(orgData);

    if (!orgData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    const validPassword = orgData.checkPassword(req.body.password);

    console.log("validPassword", validPassword);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = orgData.id;
      req.session.logged_in = true;

      res.json({ user: orgData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//should render sign up page for organization
router.get("/signup", async (req, res) => {
  try {
    res.render("organizationsignup");
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const orgData = await Organization.findByPk(req.session.id, {
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

//logout
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
