const ingredientRepository = require("../repositories/ingredient.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newIngredient = await ingredientRepository.create(data);
    res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
}

module.exports = {
    create,
};
