const friesRepository = require("../repositories/fries.repositories");

async function createFries(req, res, next) {
  try {
    const data = req.body;
    const newFries = await friesRepository.createFries(data);
    res.status(201).json(newFries);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createFries,
};
