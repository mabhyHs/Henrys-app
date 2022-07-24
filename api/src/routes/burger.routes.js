const express = require("express");
const { create } = require("../controllers/burger.controllers");
const { postValidator } = require("../middlewares/burgerValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);

module.exports = router;
