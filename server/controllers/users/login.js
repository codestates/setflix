const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");

module.exports = (req, res) => {
  const { userId, password } = req.body;
  user
    .findOne({
      where: {
        userId: userId,
        password: password,
      },
    })
    .then((data) => {
      if (!data) {
        return res.status(404).send("invalid user");
      }
      const accessToken = generateAccessToken(data.dataValues);
      console.log(data.dataValues);
      console.log(accessToken);
      sendAccessToken(res, accessToken); //쿠키로보낸다.
      res.status(200).send({ message: "ok" });
    })
    .catch((err) => {
      console.log(err);
    });
};
