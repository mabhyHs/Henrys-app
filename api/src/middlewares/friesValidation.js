const { body } = require("express-validator");
const friesRepository = require("../repositories/fries.repositories");
const userRepositories = require("../repositories/user.repositories");
const { friesRoles, authRoute } = require("../utils/routesRoles");

const nameValid = body("name")
  .notEmpty()
  .withMessage("name is required")
  .custom(async (name, { req }) => {
    const result = await friesRepository.getByName(name);

    if (req.body.id && result && req.body.id !== result.id) {
      throw new Error("fries already exists");
    }

    if (!req.body.id && result) {
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

// const imgUrlValid = body("imgUri")
//   .notEmpty()
//   .withMessage("img required")
//   .isURL()
//   .withMessage("img invalid");

const sizeValid = body("size")
  .notEmpty()
  .withMessage("size required")
  .custom(async (size) => {
    if (!["Chico", "Mediano", "Grande"].includes(size)) {
      throw new Error('invalid. allowed values: "Chico", "Mediano", "Grande"');
    }
  });

const roleValid = body("user")
  .custom(async (user) => {
    const myUser = await userRepositories.getById(user.id);
    const hasRole = authRoute(friesRoles, myUser.role);

    if (!hasRole) {
      throw new Error("This user is unauthorized");
    }
  })
  .withMessage("This user is unauthorized");

const idValid = param("id")
  .notEmpty()
  .withMessage("id required")
  .custom(async (id) => {
    const result = await friesRepository.getById(id);
    if (!result) {
      throw new Error("id invalid");
    }
  })
  .withMessage("id invalid")
  .custom(async (id) => {
    const result = await friesRepository.getAssociations(id);
    // console.log(result.burger.length);
    if (result.combo.length) {
      throw new Error(
        "No se puede eliminar porque hay un producto que lo está usando!"
      );
    }
  })
  .withMessage(
    "No se puede eliminar porque hay un producto que lo está usando!"
  );

const postValidator = [
  nameValid,
  priceValid,
  isVeggieValid,
  // imgUrlValid,
  sizeValid,
];

const putValidator = [
  nameValid,
  priceValid,
  isVeggieValid,
  // imgUrlValid,
  sizeValid,
];

deleteValidator = [idValid];

const roleValidator = [roleValid];

module.exports = {
  postValidator,
  putValidator,
  roleValidator,
  deleteValidator,
};
