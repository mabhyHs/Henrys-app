const { body } = require("express-validator");

const descriptionValid = body("description")
  .notEmpty()
  .withMessage("description is required")
  .isLength({ min: 5 })
  .withMessage("min lenght 5")
  .isLength({ max: 120 })
  .withMessage("max lenght 120");

const postValidator = [descriptionValid];

module.exports = {
  postValidator,
};
