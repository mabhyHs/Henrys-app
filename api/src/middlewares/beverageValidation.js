const { body, param } = require("express-validator");
const beverageRepository = require("../repositories/beverage.repositories");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 20 })
  .withMessage("max lenght 20")
  .custom(async (name) => {
    const result = await beverageRepository.getByName(name);
    if (result.length) {
      throw new Error("beverage already exists");
    }
  })
  .withMessage("beverage already exists");

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

const isCarbonatedValid = body("isCarbonated")
  .notEmpty()
  .withMessage("field required")
  .isBoolean()
  .withMessage("invalid value");

const isSugar = body("isSugar")
  .notEmpty()
  .withMessage("field required")
  .isBoolean()
  .withMessage("invalid value");

const imgUrlValid = body("imgUri")
  .notEmpty()
  .withMessage("img required")
  .isURL()
  .withMessage("img invalid");

const sizeValid = body("size")
  .notEmpty()
  .withMessage("size required")
  .custom(async (size) => {
    if (!["Chico", "Mediano", "Grande"].includes(size)) {
      throw new Error('invalid. allowed values: "Chico", "Mediano", "Grande"');
    }
  });

const postValidator = [
  nameValid,
  priceValid,
  isVeggieValid,
  imgUrlValid,
  sizeValid,
  isCarbonatedValid,
  isSugar,
];

module.exports = {
  postValidator,
};
