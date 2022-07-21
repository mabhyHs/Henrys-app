const { Burger } = require("../models");

async function create(data) {
  const burger = await Burger.create(data);
  await burger.addIngredient(data.ingredients);     
  const withRelation = await Burger.findByPk(burger.id, { include: [{ association: "ingredient", attributes: ["name"], through: {
    attributes: [],
  }, }] });        
  
  return withRelation;
}

async function getAll() {
    const burgers = await Burger.findAll();
    return burgers;
}

async function getByName(name) {

    if(!name){
        return await getAll();
    }
    
    const burgers = await Burger.findAll();
    return burgers;
}

module.exports = {
    create,
    getAll,
    getByName
};
