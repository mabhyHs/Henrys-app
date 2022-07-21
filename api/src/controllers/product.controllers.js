const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const friesRepository = require("../repositories/fries.repositories");
const beverageRepository = require("../repositories/beverage.repositories");

async function getByQuery(req, res, next) {
  try {
    const order = req.query.order ? req.query.order.toLowerCase() : req.query.order;
    const filter = req.query.filter ? req.query.filter.toLowerCase() : req.query.filter;
    const search = req.query.search ? req.query.search.toLowerCase() : req.query.search;
    
    let products = [];

    if(!filter){
        const burgers = await burgerRepository.getByName(search);
        const combos = await comboRepository.getByName(search);
        const fries = await friesRepository.getByName(search);
        const beverages = await beverageRepository.getByName(search);
        
        products = [...burgers, ...combos, ...fries, ...beverages];
    }    
    else if(filter === "burgers"){
        const burgers = await burgerRepository.getByName(search);
        products = [...burgers]; 
    }
    else if(filter === "combos"){
        const combos = await comboRepository.getByName(search);
        products = [...combos]; 
    }
    else if(filter === "fries"){
        const fries = await friesRepository.getByName(search);
        products = [...fries]; 
    }
    else if(filter === "beverages"){
        const beverages = await beverageRepository.getByName(search);
        products = [...beverages];
    }

        if(order){
            products = sort(order, products);
        }
       
    return res.status(200).json(products);
    
  } catch (error) {
    next(error);
  }
}

function sort(order, array){
  
    if(order === "desc"){
        return array.sort((a, b) => sortMajor(a.price, b.price));
    }
    else{
        return array.sort((a, b) => sortMinor(a.price, b.price));
    }  
}

function sortMinor(a, b){  
    return a - b;
} 

function sortMajor(a, b){  
    return sortMinor(b, a);
}

module.exports = {
    getByQuery,
};
