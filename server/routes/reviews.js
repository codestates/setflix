const router = require("express").Router();
const controllers = require("../controllers");

router.get("/:userId", controllers.getReviews); //reviews.user_id기준
router.post("/", controllers.createReviews);
router.put("/:id", controllers.modifyReviews); //reviews.id 값
router.delete("/:id", controllers.deleteReviews); //reviews.id 값

module.exports = router;
