const express = require("express");
const { create } = require("../controllers/combo.controllers");
const { postValidator } = require("../middlewares/comboValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);

module.exports = router;
