const { Order } = require("../models");

async function create(user_id, data) {
  const order = await Order.create(data);
  await order.addCustomer(user_id);
  const orderAndUser = await Order.findByPk(order.id, {
    include: {
      association: "customer",
    },
  });
  return orderAndUser;
}

async function getAll(pag, limit) {
  const { count, rows } = await Order.findAndCountAll({
    include: {
      association: "customer",
    },
    order: [["createdAt", "DESC"]],
    limit: limit,
    offset: (pag - 1) * limit,
  });
  return {
    count,
    pages: Math.ceil(count / limit),
    pag,
    rows,
  };
}

async function changeStatus(id, status) {
  const order = await Order.findByPk(id);
  return await order.update({ status });
}

async function getById(id) {
  return await Order.findByPk(id);
}

module.exports = { create, getAll, changeStatus, getById };
