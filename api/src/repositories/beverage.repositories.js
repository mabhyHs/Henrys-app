const { Beverage } = require("../models");

async function create(data) {
  const beverage = await Beverage.create(data);
  return beverage;
}

async function getAll() {
    const beverages = await Beverage.findAll();
    return beverages;
}

module.exports = {
  create,
  getAll
};
