"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Combo extends Model {
    static associate(models) {
      // define association here
      Combo.belongsToMany(models.Burger, {
        as: "burger",
        through: "Combos_Burgers",
      });
      //   Combo.belongsToMany(models.Beverage, { as: "beverage" });
      //   Combo.belongsToMany(models.Fries, { as: "fries" });
    }
  }
  Combo.init(
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
      modelName: "Combo",
    }
  );
  return Combo;
};
