"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    static associate(models) {
      Ingredient.belongsToMany(models.Burger, {
        as: "burger",
        through: "burgers_ingredients",
      });
    }
  }

  Ingredient.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false, // require  *
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false, // require  *
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false, // require  *
      },
      isVeggie: {
        type: DataTypes.BOOLEAN,
        allowNull: false, // require  *
      },
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
