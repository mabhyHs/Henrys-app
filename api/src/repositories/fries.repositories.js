const { Fries } = require("../models");

async function createFries(data) {
  const fries = await Fries.create(data);
  return fries;
}

module.exports = {
  createFries,
};
