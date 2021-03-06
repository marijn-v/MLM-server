"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class catcall extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  catcall.init(
    {
      expression: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.ENUM("pending", "approved"),
        defaultValue: "pending",
      },
    },
    {
      sequelize,
      modelName: "catcall",
    }
  );
  return catcall;
};
