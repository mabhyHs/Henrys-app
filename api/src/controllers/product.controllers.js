const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const friesRepository = require("../repositories/fries.repositories");
const beverageRepository = require("../repositories/beverage.repositories");

async function getByQuery(req, res, next) {
  try {
    const order = req.query.order.toLowerCase();
    const filter = req.query.filter.toLowerCase();
    
    let products = [];

    if(!filter){
        const burgers = await burgerRepository.getAll();
        const combos = await comboRepository.getAll();
        const fries = await friesRepository.getAll();
        const beverages = await beverageRepository.getAll();
        
        products = [...burgers, ...combos, ...fries, ...beverages];
    }    
    else if(filter === "burgers"){
        const burgers = await burgerRepository.getAll();
        products = [...burgers]; 
    }
    else if(filter === "combos"){
        const combos = await comboRepository.getAll();
        products = [...combos]; 
    }
    else if(filter === "fries"){
        const fries = await friesRepository.getAll();
        products = [...fries]; 
    }
    else if(filter === "beverages"){
        const beverages = await beverageRepository.getAll();
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
