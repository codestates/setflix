const { review } = require("../../models");

module.exports = async (req, res) => {
  // const userId = req.params.id; //굳이 안받아도될듯
  // console.log(req.body);
  const { user_id, title, comment } = req.body;

  if (!user_id || !title || !comment) {
    //없는게아니라null 빈것("")도 체킹
    return res.status(422).send("제목과 내용을 모두 입력해주세요.");
  }
  review.create({ user_id: user_id, title: title, comment: comment }).then((data) => res.status(201).send(data));
};
