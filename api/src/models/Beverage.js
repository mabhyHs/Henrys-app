"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Beverage extends Model {
    static associate(models) {
      Beverage.belongsToMany(models.Combo, {
        as: "combo",
        through: "combos_beverages",
      });
    }
  }
  Beverage.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      size: {
        type: DataTypes.ENUM(["chico", "mediano", "grande"]),
        allowNull: false,
      },
      isCarbonated: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isSugar: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      imgUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Beverage",
    }
  );
  return Beverage;
};
