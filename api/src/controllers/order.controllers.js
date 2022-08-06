const orderRepositories = require("../repositories/order.repositories");

async function create(req, res, next) {
  try {
    const order = await orderRepositories.create(req.body.user.id, req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

async function getAll(req, res, next) {
  try {
    const pag = parseInt(req.query.pag, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const orders = await orderRepositories.getAll(pag, limit);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

async function getByPurchaseId(req, res, next) {
  try {
    const { purchaseId } = req.params;
    const order = await orderRepositories.getByPurchaseId(purchaseId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}

async function changeStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const order = await orderRepositories.changeStatus(id, status);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

async function getAllByUserId(req, res, next) {
  try {
    const userId = req.body.user.id;
    const orders = await orderRepositories.getAllByUserId(userId);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  getAll,
  changeStatus,
  getAllByUserId,
  getByPurchaseId,
};
