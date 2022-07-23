const { Fries } = require("../models");
const { Op } = require("sequelize");

async function createFries(data) {
  const fries = await Fries.create(data);
  return fries;
}

async function getById(id) {
  const fries = await Fries.findByPk(id);
  return fries;
}

async function getAll() {
  const fries = await Fries.findAll();
  return fries;
}

async function getByQuery(queries) {
  if (!queries) {
    return await getAll();
  }

  const fries = await Fries.findAll({ where: queries });
  return fries;
}

async function getByName(name) {
  const fries = await Fries.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return fries;
}

module.exports = {
  createFries,
  getById,
  getAll,
  getByQuery,
  getByName,
};
