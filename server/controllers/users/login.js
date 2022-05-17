const { user } = require("../../models");
const { generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { sign } = require('jsonwebtoken');

module.exports = (req, res) => {
  console.log(req.cookies)
  console.log(req.body)
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

      // const accessToken = generateAccessToken(data.dataValues);
      // console.log(data.dataValues);
      const accessToken = sign(
        {
         userId: data.userId,
         email: data.email,
         nickname: data.nickname,
         createdAt: data.createdAt,
         updatedAt: data.updatedAt
        },
        process.env.ACCESS_SECRET,
        {expiresIn : '1h'})
      // sendAccessToken(res, accessToken); //쿠키로보낸다.
      res.status(200).cookie('jwt', accessToken, { domain: 'localhost', path: '/', secure: true })
      .json({ 'data': data.dataValues, 'message': "ok" });
    })
    .catch((err) => {
      console.log(err);
    });
};