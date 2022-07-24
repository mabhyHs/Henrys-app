const { body, param } = require("express-validator");
const friesRepository = require("../repositories/fries.repositories");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 40 })
  .withMessage("max lenght 40")
  .custom(async (name) => {
    const result = await friesRepository.getByName(name);
    if (result) {
      throw new Error("fries already exists");
    }
  })
  .withMessage("fries already exists");

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
];

module.exports = {
  postValidator,
};
