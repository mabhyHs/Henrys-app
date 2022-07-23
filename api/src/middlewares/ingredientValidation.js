const { body, param } = require("express-validator");
const ingredientRepository = require("../repositories/ingredient.repositories");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 20 })
  .withMessage("max lenght 20")
  .custom(async (name) => {
    const result = await ingredientRepository.getByName(name);
    if (result.length) {
      throw new Error("ingredient already exists");
    }
  })
  .withMessage("ingredient already exists");

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

const postValidator = [nameValid, priceValid, isVeggieValid];

module.exports = {
  postValidator,
};
