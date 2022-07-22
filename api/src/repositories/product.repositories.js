const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const friesRepository = require("../repositories/fries.repositories");
const beverageRepository = require("../repositories/beverage.repositories");

async function getByName(search) {
    const burgers = await burgerRepository.getByName(search);
    const combos = await comboRepository.getByName(search);
    const fries = await friesRepository.getByName(search);
    const beverages = await beverageRepository.getByName(search);
    const all = [...burgers, ...combos, ...fries, ...beverages];
    
    return all;
}

module.exports = {
    getByName
};
