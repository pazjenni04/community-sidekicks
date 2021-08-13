const router = require("express").Router();
const userRoutes = require("./user-routes");
const volunteerRoutes = require("./volunteer-routes");

router.use("/user", userRoutes);
router.use("/volunteerhours", volunteerRoutes);

module.exports = router;
