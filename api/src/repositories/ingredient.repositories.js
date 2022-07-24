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

async function remove(id) {
  await Ingredient.destroy({
    where: { id: id },
  });
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

module.exports = {
  create,
  getById,
  getAll,
  getByName,
  remove,
  getAssociations,
};
