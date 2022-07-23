const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const friesRepository = require("../repositories/fries.repositories");
const beverageRepository = require("../repositories/beverage.repositories");

async function getById(id) {
    
    const burger = await burgerRepository.getById(id);
        if(burger) return burger;

    const combo = await comboRepository.getById(id);
        if(combo) return combo;

    const fries = await friesRepository.getById(id);
        if(fries) return fries;

    const beverage = await beverageRepository.getById(id);
        if(beverage) return beverage;
     
    return undefined;
}

async function getByQuery(queries) {
    const burgers = await burgerRepository.getByQuery(queries); 
    const combos = await comboRepository.getByQuery(queries);
    const fries = await friesRepository.getByQuery(queries);
    const beverages = await beverageRepository.getByQuery(queries);
    const all = [...burgers, ...combos, ...fries, ...beverages];
     
    return all;
}

module.exports = {
    getById,
    getByQuery
};
