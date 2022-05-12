const router = require("express").Router();
const controllers = require("../controllers");

router.get("/:userId/info", controllers.info);
router.post("/signup", controllers.signup);
// router.post("/login", controllers.login);
// router.post("/logout", controllers.logout);
// router.post("/modify", controllers.modify);

module.exports = router;
