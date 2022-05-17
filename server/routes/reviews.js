const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.getReviews);
router.post("/:userId", controllers.createReviews);
router.put("/", controllers.modifyReviews);
router.delete("/", controllers.deleteReviews);

module.exports = router;
