const { body } = require("express-validator");

const descriptionValid = body("description")
  .notEmpty()
  .withMessage("description is required")
  .isLength({ min: 5 })
  .withMessage("min lenght 5")
  .isLength({ max: 500 })
  .withMessage("max lenght 500");

const postValidator = [descriptionValid];

module.exports = {
  postValidator,
};
