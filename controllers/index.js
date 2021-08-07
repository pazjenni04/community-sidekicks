const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./home-route");
const userRoutes = require("./user-route");

router.use("/", homeRoutes);
router.use("/user", userRoutes);
router.use("/api", apiRoutes);

module.exports = router;
