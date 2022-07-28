const { body, param } = require("express-validator");
const burgerRepository = require("../repositories/burger.repositories");
const comboRepository = require("../repositories/combo.repositories");
const beverageRepository = require("../repositories/beverage.repositories");
const friesRepository = require("../repositories/fries.repositories");

const burgerValid = body("burgers")
  .custom(async (burgers) => {
    for (let i = 0; i < burgers?.length; i++) {
      const id = burgers[i];
      const res = await burgerRepository.getById(id);

      if (!res) {
        throw new Error(`Burger with id ${id} not exists!`);
      }
    }
  })
  .withMessage("burgers invalid!");

const beverageValid = body("beverages")
  .custom(async (beverages) => {
    for (let i = 0; i < beverages?.length; i++) {
      const id = beverages[i];
      const res = await beverageRepository.getById(id);

      if (!res) {
        throw new Error(`Beverage with id ${id} not exists!`);
      }
    }
  })
  .withMessage("beverages invalid!");

const friesValid = body("fries")
  .custom(async (fries) => {
    for (let i = 0; i < fries?.length; i++) {
      const id = fries[i];
      const res = await friesRepository.getById(id);

      if (!res) {
        throw new Error(`Fries with id ${id} not exists!`);
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
  .custom(async (name, { req }) => {
    const result = await burgerRepository.getByName(name);

    if (req.body.id && result && req.body.id !== result.id) {
      throw new Error("burger already exists");
    }

    if (!req.body.id && result) {
      throw new Error("burger already exists");
    }
  })
  .withMessage("combo already exists");
// .custom(async (name) => {
//   const result = await comboRepository.getByName(name);
//   if (result) {
//     throw new Error("combo already exists");
//   }
// })
// .withMessage("combo already exists");

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
