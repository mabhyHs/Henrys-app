const { Beverage } = require("../models");

async function create(data) {
  const beverage = await Beverage.create(data);
  return beverage;
}

async function getById(id) {
  const beverage = await Beverage.findByPk(id);
  return beverage;
}

async function getAll() {
  const beverages = await Beverage.findAll();
  return beverages;
}

async function getByQuery(queries) {
  if (!queries) {
    return await getAll();
  }

  const beverages = await Beverage.findAll({ where: queries });
  return beverages;
}

async function getByName(name) {
  const beverage = await Beverage.findAll({ where: { name: name } });
  return beverage;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery,
  getByName,
};
