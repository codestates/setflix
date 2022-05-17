const { review } = require("../../models");

module.exports = async (req, res) => {
  review.findAll().then((data) => res.status(200).send(data));
  //파라미터
};
