const { Combo } = require("../models");

async function create(data) {
  const combo = await Combo.create(data);
  await combo.addBurger(data.burgers);
  await combo.addBeverage(data.beverages);
  await combo.addFries(data.fries);
  const withRelation = await getById(combo.id);

  return withRelation;
}

async function getById(id){        
    
    const combo = await Combo.findByPk(id, {
        include: [
            {
                association: "burger", 
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            },
            {
                association: "beverage", 
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            },
            {
                association: "fries", 
                attributes: ["name"],
                through: {
                    attributes: [],
                }
            }
        ],
    });

    return combo;
}

async function getAll() {
    const combos = await Combo.findAll();
    return combos;
}

async function getByQuery(queries) {    
    
    if(!queries){
        return await getAll();
    }
    
    const combos = await Combo.findAll({ where: queries });
    return combos;
}

module.exports = {
  create,
  getById,
  getAll,
  getByQuery
};
