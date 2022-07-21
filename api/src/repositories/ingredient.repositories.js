const { Ingredient } = require("../models");

async function create(data) {
  const ingredients = await Ingredient.create(data);
  return ingredients;
}

module.exports = {
    create,
};
