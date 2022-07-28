const { Beverage } = require("../models");
const { Op } = require("sequelize");

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
  const beverage = await Beverage.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return beverage;
}

async function destroy(id) {
  return await Beverage.destroy({ where: { id: id } });
}

async function restore(id) {
  const beverage = await Beverage.restore({
    where: {
      id: id,
    },
  });
  return beverage;
}

async function update(id, data) {
  return await Beverage.update(data, { where: { id: id } });
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
