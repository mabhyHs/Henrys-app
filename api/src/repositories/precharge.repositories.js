const { 
    Ingredient,
    Burger,
    Fries,
    Beverage,
    Combo

} = require("../models");

const {addDataDB} = require("../utils/addDataDB");

async function precharge() {

    try {       
        
        const data = addDataDB();
        
        if(!data) return;
    
        if(data.ingredients.length){
            await Ingredient.bulkCreate(data.ingredients, {
                ignoreDuplicates: true
            });
        }

        if(data.burgers.length){
            await Burger.bulkCreate(data.burgers, {
                ignoreDuplicates: true
            });
        }    
        
        if(data.fries.length){
            await Fries.bulkCreate(data.fries, {
                ignoreDuplicates: true
            });
        }

        if(data.beverages.length){
            await Beverage.bulkCreate(data.beverages, {
                ignoreDuplicates: true
            });
        }

        if(data.combos.length){
            await Combo.bulkCreate(data.combos, {
                ignoreDuplicates: true
            });
        } 

        console.log("models precharged successfully!");

    } catch (error) {
        console.log(error);
    }    
}

module.exports = {
    precharge
};
