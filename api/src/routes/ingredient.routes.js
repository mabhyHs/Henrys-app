const express = require("express");
const { create, getAll } = require("../controllers/ingredient.controllers");
const validationResultHandler = require("../middlewares/validationResultHandler");
const { postValidator } = require("../middlewares/ingredientValidation");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);
router.get("/", getAll);

module.exports = router;
