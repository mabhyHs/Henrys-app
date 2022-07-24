const express = require("express");
const {
  create,
  get,
  remove,
} = require("../controllers/ingredient.controllers");
const validationResultHandler = require("../middlewares/validationResultHandler");
const {
  postValidator,
  deleteValidator,
} = require("../middlewares/ingredientValidation");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);
router.get("/", get);
router.delete("/:id", deleteValidator, validationResultHandler, remove);

module.exports = router;
