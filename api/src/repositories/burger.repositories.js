const { Burger } = require("../models");

async function create(data) {
  const burger = await Burger.create(data);
  await burger.addIngredient(data.ingredients);
  const withRelation = await getById(burger.id);

  return withRelation;
}

async function getById(id) {
  const burger = await Burger.findByPk(id, {
    include: [
      {
        association: "ingredient",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });

  return burger;
}

async function getAll() {
  const burgers = await Burger.findAll();
  return burgers;
}

async function getByQuery(queries) {
  if (!queries) {
    return await getAll();
  }

  const burgers = await Burger.findAll({ where: queries });
  return burgers;
}

async function getByName(name) {
  const burgers = await Burger.findAll({ where: { name: name } });
  return burgers;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery,
  getByName,
};
