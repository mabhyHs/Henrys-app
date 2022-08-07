const { Burger } = require("../models");
const { Op } = require("sequelize");

async function create(data) {
  const burger = await Burger.create(data);
  await burger.addIngredient(data.ingredients);
  const withRelation = await getById(burger.id);

  return withRelation;
}

async function getById(id) {
  const burger = await Burger.findByPk(id, {
    paranoid: false,
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
  const burgers = await Burger.findAll({paranoid: false});
  return burgers;
}

async function getByQuery(queries) {
  if (!queries) {
    return await getAll();
  }

  const burgers = await Burger.findAll({ where: queries, paranoid: false });
  return burgers;
}

async function getByName(name) {
  const burger = await Burger.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return burger;
}

async function destroy(id) {
  const deletedBurger = await Burger.destroy({
    where: {
      id: id,
    },
  });

  return deletedBurger;
}

async function restore(id) {
  const restoredBurger = await Burger.restore({
    where: {
      id: id,
    },
  });

  return restoredBurger;
}

async function update(data) {
  const updatedBurger = await Burger.update(data, { where: { id: data.id } });

  /* // lo busco
  const updateado = await Burger.findByPk(data.id);
        
  // lo relaciono
  if(recipe){
      await recipe.setDiets(diets); // set, que pise todo y lo reemplace

      const recipeRelation = await Recipe.findByPk(id, { include: [{ model: Diet, attributes: ["name"] }] });
      return res.status(200).send(recipeRelation);
  }       

  await updatedBurger.addIngredient(data.ingredients);
  const withRelation = await getById(burger.id);

  return withRelation; */

  return updatedBurger;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery,
  getByName,
  destroy,
  restore,
  update,
};
