const { Combo } = require("../models");

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

module.exports = {
  create,
};
