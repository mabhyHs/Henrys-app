const comboRepository = require("../repositories/combo.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newCombo = await comboRepository.create(data);
    res.status(201).json(newCombo);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
};
