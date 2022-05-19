"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "movies",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          type: Sequelize.STRING,
        },
        photo: {
          type: Sequelize.STRING,
        },
        releasedAt: {
          type: Sequelize.STRING,
        },
        actor: {
          type: Sequelize.STRING,
        },
        director: {
          type: Sequelize.STRING,
        },
        genre: {
          type: Sequelize.STRING,
        },
        description: {
          type: Sequelize.STRING(1000),
        },
      },
      { timestamps: true }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("movies");
  },
};
