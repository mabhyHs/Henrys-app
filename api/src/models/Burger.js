"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Burger extends Model {
    static associate(models) {
      Burger.belongsToMany(models.Ingredient, {
        as: "ingredient",
        through: "burgers_ingredients",
      });
      Burger.belongsToMany(models.Combo, {
        as: "combo",
        through: "combos_burgers",
      });
    }
  }
  Burger.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT(),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(500),
        validate: {
          isUrl: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Burger",
    }
  );
  return Burger;
};
