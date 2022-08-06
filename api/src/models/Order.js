"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsToMany(models.User, {
        as: "customer",
        through: "users_orders",
      });
    }
  }
  Order.init(
    {
      purchaseId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      status: {
        type: DataTypes.ENUM(["Pendiente", "Entregado"]),
        defaultValue: "Pendiente",
      },
    },
    {
      sequelize,
      modelName: "Order",
      paranoid: true,
      timestamps: true,
    }
  );
  return Order;
};
