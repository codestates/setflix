const router = require("express").Router();
const controllers = require("../controllers");

router.get("/info/:userId", controllers.info);
router.post("/signup", controllers.signup);
router.post("/login", controllers.login);
router.post("/logout", controllers.logout);
router.put("/modification/:userId", controllers.modify);
router.get("/auth", controllers.auth); //a페이지에서 b로갈때 쿠키를확인해서 권한확인, get요청??

module.exports = router;
