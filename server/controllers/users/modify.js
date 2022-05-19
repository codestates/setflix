const { user } = require("../../models");
// const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { password, email, nickname } = req.body;
  const userId = req.params.userId; //유저아이디를바꾸는경우면?
  user
    .update(
      { password: password, email: email, nickname: nickname },
      {
        where: {
          userId: userId,
        },
      }
    )
    .then(() => {
      res.status(200).send("success"); //여기서도 리다이렉션으로 마이패이지를 다시띄워줘야하나?
    })
    .catch((err) => {
      console.log(err);
    });
};
