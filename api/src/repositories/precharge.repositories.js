const { 
    Ingredient,
    Burger,
    Fries,
    Beverage,
    Combo

} = require("../models");

async function precharge(data) {

    try {       
        
        if(!data) return;
    
        if(data.ingredients){
            await Ingredient.bulkCreate(data.ingredients, {
                ignoreDuplicates: true
            });
        }

        if(data.burgers){
            await Burger.bulkCreate(data.burgers, {
                ignoreDuplicates: true
            });
        }    
        
        if(data.burgers){
            await Fries.bulkCreate(data.fries, {
                ignoreDuplicates: true
            });
        }

        if(data.beverages){
            await Beverage.bulkCreate(data.beverages, {
                ignoreDuplicates: true
            });
        }

        if(data.combos){
            await Combo.bulkCreate(data.combos, {
                ignoreDuplicates: true
            });
        } 
        
    } catch (error) {
        console.log(error);
    }    
}

module.exports = {
    precharge
};
