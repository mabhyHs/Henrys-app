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
      status: {
        type: DataTypes.ENUM(["Pendiente", "Entregado"]),
        defaultValue: "Pendiente",
      },
      products: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
      },
      // cupon: {},
      date: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      note: {
        type: DataTypes.TEXT,
      },
      totalPrice: {
        type: DataTypes.FLOAT,
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
