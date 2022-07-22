const { Combo } = require("../models");
const { Op } = require("sequelize");

async function create(data) {
  const combo = await Combo.create(data);
  await combo.addBurger(data.burgers);
  await combo.addBeverage(data.beverages);
  await combo.addFries(data.fries);
  return await Combo.findByPk(combo.id, {
    include: [
      {
        association: "burger",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        association: "beverage",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
      {
        association: "fries",
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
}

async function getAll() {
    const combos = await Combo.findAll();
    return combos;
}

async function getByName(name) {    
    
    if(!name){
        return await getAll();
    }
    
    const combos = await Combo.findAll({ where: { name: {[Op.iLike]: `%${name}%`} }});
    return combos;
}

module.exports = {
  create,
  getAll,
  getByName
};
