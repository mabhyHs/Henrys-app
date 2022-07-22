const { Burger } = require("../models");
const { Op } = require("sequelize");

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

    /* if(!name){
        return await getAll();
    } */

    //recorro de alguna forma para crear condiciones /?
    // ahora que pienso tengo que tenes isVeggie en true solo si no es nulo y la busqueda puede estar o no
        
    //const burgers = await Burger.findAll({ where: { name: {[Op.iLike]: `%${name}%`} } });


    const burgers = await Burger.findAll({ 

        where: {
            [Op.and]: [
                { 
                    name: { [Op.iLike]: `%${name}%` }                    
                },
                {"isVeggie": false} 
            ]          
        }     
    });

    return burgers;
}

module.exports = {
    create,
    getAll,
    getByName
};
