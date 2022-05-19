const { movie } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id;
  movie.findOne({ where: { id: id } }).then((data) => res.status(200).send(data.photo));
  // console.log("get movies");
};
