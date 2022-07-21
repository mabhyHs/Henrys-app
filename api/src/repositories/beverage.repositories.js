const { Beverage } = require("../models");

async function create(data) {
  const beverage = await Beverage.create(data);
  return beverage;
}

module.exports = {
  create,
};
