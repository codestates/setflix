"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        as: "users",
        foreignKey: "user_id",
        onDelete: "cascade",
      });
      this.belongsTo(models.movie, {
        as: "movies",
        foreignKey: "movie_id",
        onDelete: "cascade",
      });
    }
  }
  review.init(
    {
      user_id: DataTypes.INTEGER,
      movie_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      comment: DataTypes.STRING,
      thumb: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "review",
    }
  );
  return review;
};
