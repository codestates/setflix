module.exports = (req, res) => {
  //로그아웃 로직을 작성합니다.
  //쿠키 값을지워준다 or 쿠키에 빈값을 넣어 보냄.
  console.log("server logout");
  res.clearCookie("jwt");
  res.status(205).send();

  //res.redirect???
};
