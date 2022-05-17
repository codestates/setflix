module.exports = {
  info: require("./users/info"),
  signup: require("./users/signup"),
  login: require("./users/login"),
  logout: require("./users/logout"),
  modify: require("./users/modify.js"),
  auth: require("./users/auth.js"),
  getMovies: require("./movies/getMoives"),
  getReviews: require("./reviews/getReviews"),
  createReviews: require("./reviews/createReviews"),
  modifyReviews: require("./reviews/modifyReviews"),
  deleteReviews: require("./reviews/deleteReviews"),
};
