const router = require("express").Router();
const orgRoutes = require("./organization-routes");
const volunteerRoutes = require("./volunteer-routes");

router.use("/organization", orgRoutes);
router.use("/volunteer", volunteerRoutes);

module.exports = router;
