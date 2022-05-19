const { review } = require("../../models");

module.exports = async (req, res) => {
  const id = req.params.id; //삭제는 reviews테이블 id기준
  review.destroy({ where: { id: id } }).then((data) => res.status(204).send("후기 삭제 완료"));
};
