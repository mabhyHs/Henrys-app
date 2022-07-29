const { BurgerBase } = require("../models");

async function getAll() {
  const burgersBase = await BurgerBase.findAll();
  return burgersBase;
}

async function getFirst() {
  const burgersBase = await getAll();
  return burgersBase[0];
}

async function update(data) {
  const update = await BurgerBase.update(data, { where: { id: data.id } });
  return update;
}

module.exports = {
  getAll,
  getFirst,
  update,
};
