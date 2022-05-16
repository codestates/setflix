const express = require("express");
const router = express.Router();
const userRouter = require("./users");
const movieRouter = require("./movies");
const reviewRouter = require("./reviews");

router.use("/users", userRouter);
// router.use("/movies", movieRouter);
// router.use("/reviews", reviewRouter);

module.exports = router;
