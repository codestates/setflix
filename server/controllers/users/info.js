const { user } = require("../../models");

module.exports = async (req, res) => {
  const userId = req.params.userId;
  user.findAll({ where: { userId: userId } }).then((data) => res.send(data));
};

//파라미터 특정아이디 조회

//auth확인 쿠키 디코딩해서 아이디값찾아서
