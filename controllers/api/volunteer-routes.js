const router = require("express").Router();
const sequelize = require("../../config/connection");
const VolunteerHours = require("../../models/volunteer-hours");
const User = require("../../models/user");

// GET all volunteerhours for account
router.get("/", async (req, res) => {
  try {
    const dbvolunteerhoursData = await VolunteerHours.findAll();

    const VolHours = dbvolunteerhoursData.map((VolunteerHours) =>
      VolunteerHours.get({ plain: true })
    );

    res.render("volunteer-hours", {
      VolHours,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one volunteer experience
router.get("/:id", async (req, res) => {
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
    res.render("volunteer-hours", { volunteerhours });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
// router.get("/user/:id", async (req, res) => {
//   try {
//     const dbuserData = await user.findByPk(req.params.id);

//     const painting = dbuserData.get({ plain: true });

//     res.render("user", { user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;
