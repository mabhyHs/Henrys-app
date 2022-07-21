const burgerRepository = require("../repositories/burger.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newBurger = await burgerRepository.create(data);
    res.status(201).json(newBurger);
  } catch (error) {
    next(error);
  }
}

module.exports = {
    create,
};
