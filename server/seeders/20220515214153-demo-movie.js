"use strict";
require("dotenv").config();

const baseUrl = "https://api.themoviedb.org/3/";
const imageUrl = "hppt://image.tmdb.org/t/p/사이즈";
const apiKey = process.env.API;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "movies",
      [
        {
          title: "spider man",
          photo: "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/8EUf/image/Dxb6BFxfrw98Rte3jO5V58E9ae8.jpg",
          releasedAt: "2021-08-12",
          actor: "kim",
          director: "kim",
          genre: "action",
          description: "블라블라",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("movies", null, {});
  },
};
