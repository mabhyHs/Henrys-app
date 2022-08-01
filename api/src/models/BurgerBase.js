"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BurgerBase extends Model {
  }
  BurgerBase.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Burger base 1",
        unique: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "BurgerBase",
    }
  );
  return BurgerBase;
};
