// const { user } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = (req, res) => {
  const accessTokenData = isAuthorized(req);
  //로그인 여부를 판단하고, Access token payload를 이용하여 응답을 제공하세요.
  //쿠키에 토큰이 들어있는지 없는지 판단한다.
  console.log(accessTokenData);

  if (!accessTokenData) {
    return res.status(401).send({ data: null, message: "not authorized" });
  }
  //비밀번호 쿠키에서 지운상태여야한다.
  res.status(200).send({ data: { userInfo: accessTokenData } });
};
