const { movie } = require("../../models");

module.exports = async (req, res) => {
  movie.findAll().then((data) => res.status(200).send(data));
  // console.log("get movies");
};
