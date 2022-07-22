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
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isVeggie: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
