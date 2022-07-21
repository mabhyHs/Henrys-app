const { body, param } = require('express-validator');
const ingredientRepository = require('../repositories/ingredient.repositories');


const ingredientsValid = body('ingredients')
  /* .notEmpty()
  .withMessage('email is required') */
  .custom(
    async (ingredients) => {

        for(let i=0; i<ingredients.length; i++){

            const id = ingredients[i];
            const res = await ingredientRepository.getById(id);

            if(!res){
                throw new Error(`Ingredient with id ${id} not exists!`);
            }            
        } 
    },
  )
  .withMessage('ingredient invalid!');

const postValidator = [
    ingredientsValid,
];

module.exports = {
    postValidator
};