"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  movie.init(
    {
      title: DataTypes.STRING,
      photo: DataTypes.STRING,
      releasedAt: DataTypes.STRING,
      actor: DataTypes.STRING,
      director: DataTypes.STRING,
      genre: DataTypes.STRING,
      description: DataTypes.STRING(1000),
    },
    {
      timestamps: false,
      sequelize,
      modelName: "movie",
    }
  );
  return movie;
};
