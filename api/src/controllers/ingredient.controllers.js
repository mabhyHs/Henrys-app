const ingredientRepository = require("../repositories/ingredient.repositories");

async function create(req, res, next) {
  try {
    const data = req.body;
    const newIngredient = await ingredientRepository.create(data);
    return res.status(201).json(newIngredient);
  } catch (error) {
    next(error);
  }
}

async function get(req, res, next) {
  try {
    const ingredients = await ingredientRepository.getAll();
    return res.status(200).json(ingredients);
  } catch (error) {
    next(error);
  }
}

async function destroy(req, res, next) {
  try {
    const { id } = req.params;
    const deletedIngredient = await ingredientRepository.destroy(id);

    if (deletedIngredient)
      return res.status(200).json("Ingredient deleted successfully");

    return res
      .status(404)
      .json({ error: "There is no Ingredient to be deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function restore(req, res, next) {
  try {
    const { id } = req.params;
    const restoredIngredient = await ingredientRepository.restore(id);

    if (restoredIngredient)
      return res
        .status(200)
        .json({ message: "Ingredient restored successfully" });

    return res
      .status(404)
      .json({ error: "There is no Ingredient deleted with this id" });
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const data = req.body;
    const updatedIngredient = await ingredientRepository.update(data);
    return res.status(200).json({ message: "Ingredient updated" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  create,
  get,
  destroy,
  restore,
  update,
};
