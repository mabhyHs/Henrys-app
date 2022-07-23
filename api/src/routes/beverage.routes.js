const express = require("express");
const { create } = require("../controllers/beverage.controllers");
const { postValidator } = require("../middlewares/beverageValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);

module.exports = router;
