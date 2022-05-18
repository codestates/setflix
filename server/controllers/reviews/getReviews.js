const { review } = require("../../models");

module.exports = async (req, res) => {
  const user_id = req.params.userId; //reviews.user_id 값 기준으로 조회
  review.findAll({ where: { user_id: user_id } }).then((data) => res.status(200).send(data));
  //파라미터
};
