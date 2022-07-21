const { Fries } = require("../models");

async function createFries(data) {
  const fries = await Fries.create(data);
  return fries;
}

async function getAll() {
    const fries = await Fries.findAll();
    return fries;
}

module.exports = {
  createFries,
  getAll
};
