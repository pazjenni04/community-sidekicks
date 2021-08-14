const router = require("express").Router();

const sequelize = require("../config/connection");
const { newUser } = require("../models");

router.post("/", async (req, res) => {
  try {
    const userData = await newUser.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.get("/newUser", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("new-user");
});

module.exports = router;
