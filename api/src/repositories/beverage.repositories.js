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

async function getAll(paranoid) {
  const beverages = await Beverage.findAll({paranoid: paranoid});
  return beverages;
}

async function getByQuery(queries, paranoid) {
  if (!queries) {
    return await getAll(paranoid);
  }

  const beverages = await Beverage.findAll({ where: queries, paranoid: paranoid });
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
