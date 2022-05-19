"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.review, {
        as: "reviews",
        foreignKey: "id",
        onDelete: "cascade",
      });
    }
  }
  user.init(
    {
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      nickname: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
