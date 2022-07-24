const friesRepository = require("../repositories/fries.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newFries = await friesRepository.create(data);
    return res.status(201).json(newFries);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
