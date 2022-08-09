const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const friesRepository = require("../repositories/fries.repositories");
const beverageRepository = require("../repositories/beverage.repositories");
const burgerBaseRepository = require("../repositories/burgerBase.repositories");

async function getById(id) {
    
    const burger = await burgerRepository.getById(id);
        if(burger) return burger;

    const combo = await comboRepository.getById(id);
        if(combo) return combo;

    const fries = await friesRepository.getById(id);
        if(fries) return fries;

    const beverage = await beverageRepository.getById(id);
        if(beverage) return beverage;

    const burgerBase = await burgerBaseRepository.getById(id);
        if(burgerBase) return burgerBase;
     
    return undefined;
}

async function getByQuery(queries, isBase) {
    const burgers = await burgerRepository.getByQuery(queries); 
    const combos = await comboRepository.getByQuery(queries);
    const fries = await friesRepository.getByQuery(queries);
    const beverages = await beverageRepository.getByQuery(queries);
    let all;

    if(isBase === "true"){
        const burgerBase = await burgerBaseRepository.getByQuery(queries);
        all = [...burgers, ...combos, ...fries, ...beverages, ...burgerBase];
    }else{
        all = [...burgers, ...combos, ...fries, ...beverages];
    }
     
    return all;
}

module.exports = {
    getById,
    getByQuery
};
