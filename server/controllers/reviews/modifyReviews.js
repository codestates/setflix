const { review } = require("../../models");

module.exports = (req, res) => {
  const { title } = req.body;
  const modifyReview = req.body.review; //테이블이름과 중복
  const id = req.params.id;

  if (!title || !modifyReview) {
    return res.status(422).send("제목과 내용을 모두 입력해주세요.");
  }
  review
    .update(
      { title: title, comment: modifyReview },
      {
        where: {
          id: id,
        },
      }
    )
    .then((data) => {
      res.status(200).send("후기 수정 완료");
    })
    .catch((err) => {
      console.log(err);
    });
};
