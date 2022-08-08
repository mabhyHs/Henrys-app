const { BurgerBase } = require("../models");

async function getAll() {
    const burgersBase = await BurgerBase.findAll({paranoid: false}, {order: "name: ASC"});
    return burgersBase;
  }
  
  async function getByQuery(queries) {
    if (!queries) {
      return await getAll();
    }
  
    const beverages = await BurgerBase.findAll({ where: queries, paranoid: false });
    return beverages;
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
  getByQuery,
  getFirst,
  update,
};
