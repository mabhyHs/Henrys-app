const { Ingredient } = require("../models");
const { Op } = require("sequelize");

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

async function getByName(name) {
  const ingredient = await Ingredient.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return ingredient;
}

async function getAssociations(id) {
  const ingredient = await Ingredient.findByPk(id, {
    include: {
      association: "burger",
    },
  });
  console.log(ingredient);
  return ingredient;
}

async function destroy(id) {
  const deletedIngredient = await Ingredient.destroy({
    where: {
      id: id,
    },
  });

  return deletedIngredient;
}

async function restore(id) {
  const restoredIngredient = await Ingredient.restore({
    where: {
      id: id,
    },
  });

  return restoredIngredient;
}

async function update(data) {
  const updatedIngredient = await Ingredient.update(data, {
    where: { id: data.id },
  });
  return updatedIngredient;
}

module.exports = {
  create,
  getById,
  getAll,
  getByName,
  getAssociations,
  destroy,
  restore,
  update,
};
