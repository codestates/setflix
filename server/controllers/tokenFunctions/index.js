require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "60m" });
  },
  sendAccessToken: (res, accessToken) => {
    // JWT 토큰을 쿠키로 전달합니다.
    res.cookie("jwt", accessToken);
  },

  isAuthorized: (req) => {
    //JWT 토큰 정보를 받아서 검증합니다.
    //jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    const authorization = req.headers["cookie"]; ///'cookie'
    if (!authorization) {
      return null; //쿠키에안들어있다.
    }
    console.log("111111111");

    console.log(req.cookie);
    console.log(authorization);
    const token = authorization.split(" ")[0].slice(4);
    try {
      return verify(token, process.env.ACCESS_SECRET);
    } catch (err) {
      // return null if invalid token
      return null;
    }
  },
};
