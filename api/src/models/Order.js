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
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
      },
      status: {
        type: DataTypes.ENUM(["Pendiente", "Entregado"]),
        defaultValue: "Pendiente",
      },
      purchaseId: {
        type: DataTypes.STRING,
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
