const router = require("express").Router();
const controllers = require("../controllers");

router.get("/", controllers.getMovies);

module.exports = router;
