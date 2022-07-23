const { body, param } = require("express-validator");
const ingredientRepository = require("../repositories/ingredient.repositories");
const burgerRepository = require("../repositories/burger.repositories");

const ingredientsValid = body("ingredients")
  .notEmpty()
  .withMessage("ingredients array is required")
  .custom(async (ingredients) => {
    for (let i = 0; i < ingredients.length; i++) {
      const id = ingredients[i];
      const res = await ingredientRepository.getById(id);

      if (!res) {
        throw new Error(`Ingredient with id ${id} not exists!`);
      }
    }
  })
  .withMessage("ingredient invalid!");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 20 })
  .withMessage("max lenght 20")
  .custom(async (name) => {
    const result = await burgerRepository.getByName(name);
    if (result.length) {
      throw new Error("burger already exists");
    }
  })
  .withMessage("burger already exists");

const priceValid = body("price")
  .notEmpty()
  .withMessage("price is required")
  .isFloat({ min: 0 })
  .withMessage("invalid price");

const isVeggieValid = body("isVeggie")
  .notEmpty()
  .withMessage("field required")
  .isBoolean()
  .withMessage("invalid value");

const imgUriValid = body("imgUri")
  .notEmpty()
  .withMessage("img required")
  .isURL()
  .withMessage("img invalid");

const postValidator = [
  ingredientsValid,
  nameValid,
  priceValid,
  isVeggieValid,
  imgUriValid,
];

module.exports = {
  postValidator,
};
