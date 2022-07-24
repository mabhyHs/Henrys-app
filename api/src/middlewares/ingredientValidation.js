const { body, param } = require("express-validator");
const ingredientRepository = require("../repositories/ingredient.repositories");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 40 })
  .withMessage("max lenght 40")
  .custom(async (name) => {
    const result = await ingredientRepository.getByName(name);
    if (result) {
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

const idValid = param("id")
  .notEmpty()
  .withMessage("id required")
  .custom(async (id) => {
    const result = await ingredientRepository.getById(id);
    if (!result) {
      throw new Error("id invalid");
    }
  })
  .withMessage("id invalid")
  .custom(async (id) => {
    const result = await ingredientRepository.getAssociations(id);
    // console.log(result.burger.length);
    if (result.burger.length) {
      throw new Error("ingredient has burgers associated");
    }
  })
  .withMessage("ingredient has burgers associated");

const postValidator = [nameValid, priceValid, isVeggieValid];

const deleteValidator = [idValid];

module.exports = {
  postValidator,
  deleteValidator,
};
