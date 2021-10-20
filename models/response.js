"use strict";
const { DATE } = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class response extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  response.init(
    {
      expression: DataTypes.STRING,
      translation: DataTypes.STRING,
      languageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "response",
    }
  );
  return response;
};
