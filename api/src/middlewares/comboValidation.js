const { body, param } = require("express-validator");
const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const beverageRepository = require("../repositories/beverage.repositories");
const friesRepository = require("../repositories/fries.repositories");

const burgerValid = body("burgers")
  .notEmpty()
  .withMessage("burgers array is required")
  .custom(async (burgers) => {
    for (let burger of burgers) {
      const res = await burgerRepository.getById(burger);
      console.log(res);
      if (!res) {
        throw new Error(`burger with id ${id} not exists!`);
      }
    }
  })
  .withMessage("burgers invalid!");

const beverageValid = body("beverages")
  .notEmpty()
  .withMessage("beverages array is required")
  .custom(async (beverages) => {
    for (let beverage of beverages) {
      const res = await beverageRepository.getById(beverage);
      if (!res) {
        throw new Error(`beverage with id ${id} not exists!`);
      }
    }
  })
  .withMessage("beverages invalid!");

const friesValid = body("fries")
  .notEmpty()
  .withMessage("fries array is required")
  .custom(async (fries) => {
    for (let fry of fries) {
      const res = await friesRepository.getById(fry);
      if (!res) {
        throw new Error(`fries with id ${id} not exists!`);
      }
    }
  })
  .withMessage("fries invalid!");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .isLength({ min: 2 })
  .withMessage("min lenght 2")
  .isLength({ max: 40 })
  .withMessage("max lenght 40")
  .custom(async (name) => {
    const result = await comboRepository.getByName(name);
    if (result) {
      throw new Error("combo already exists");
    }
  })
  .withMessage("combo already exists");

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
  burgerValid,
  beverageValid,
  friesValid,
  nameValid,
  priceValid,
  isVeggieValid,
  imgUriValid,
];

module.exports = {
  postValidator,
};
