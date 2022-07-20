"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Fries extends Model {
    static associate(models) {
      Fries.belongsToMany(models.Combo, {
        as: "combo",
        through: "combos_fries",
      });
    }
  }
  Fries.init(
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
      imgUri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Fries",
    }
  );
  return Fries;
};
