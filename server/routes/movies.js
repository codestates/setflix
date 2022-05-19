const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.getMovies);
router.get("/:id", controllers.moviePhoto);

module.exports = router;
