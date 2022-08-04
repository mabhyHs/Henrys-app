const { Fries } = require("../models");
const { Op } = require("sequelize");

async function create(data) {
  const fries = await Fries.create(data);
  return fries;
}

async function getById(id) {
  const fries = await Fries.findByPk(id);
  return fries;
}

async function getAll(paranoid) {
  const fries = await Fries.findAll({paranoid: paranoid});
  return fries;
}

async function getByQuery(queries, paranoid) {
  if (!queries) {
    return await getAll(paranoid);
  }

  const fries = await Fries.findAll({ where: queries, paranoid: paranoid });
  return fries;
}

async function getByName(name) {
  const fries = await Fries.findOne({
    where: { name: { [Op.iLike]: `${name}` } },
  });
  return fries;
}

async function destroy(id) {
  return await Fries.destroy({
    where: {
      id: id,
    },
  });
}

async function update(id, data) {
  return await Fries.update(data, { where: { id: id } });
}

async function restore(id) {
  const fries = await Fries.restore({
    where: {
      id: id,
    },
  });
  return fries;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery,
  getByName,
  destroy,
  update,
  restore,
};
