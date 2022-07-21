const { Ingredient } = require("../models");

async function create(data) {
  const ingredients = await Ingredient.create(data);
  return ingredients;
}

async function getById(id) {
    const ingredient = await Ingredient.findByPk(id);
    return ingredient;
}

async function getAll() {
    const ingredient = await Ingredient.findAll();
    return ingredient;
}

module.exports = {
    create,
    getById,
    getAll
};
