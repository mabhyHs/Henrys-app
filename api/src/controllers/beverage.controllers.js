const beverageRepository = require("../repositories/beverage.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newBeverage = await beverageRepository.create(data);
    res.status(201).json(newBeverage);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
