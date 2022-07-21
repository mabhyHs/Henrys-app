const { Fries } = require("../models");
const { Op } = require("sequelize");

async function createFries(data) {
  const fries = await Fries.create(data);
  return fries;
}

async function getAll() {
    const fries = await Fries.findAll();
    return fries;
}

async function getByName(name) {

    if(!name){
        return await getAll();
    }

    const fries = await Fries.findAll({ where: { name: {[Op.iLike]: `%${name}%`} }});
    return fries;
}

module.exports = {
  createFries,
  getAll,
  getByName
};
