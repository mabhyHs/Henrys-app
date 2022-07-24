const express = require("express");
const { create } = require("../controllers/ingredient.controllers");
const validationResultHandler = require("../middlewares/validationResultHandler");
const { postValidator } = require("../middlewares/ingredientValidation");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);

module.exports = router;
