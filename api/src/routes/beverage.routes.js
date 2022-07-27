const express = require("express");
const { create } = require("../controllers/beverage.controllers");
const { postValidator } = require("../middlewares/beverageValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");
const verifyToken = require("../middlewares/tokenValidation");

const router = express.Router();

router.post("/", verifyToken, postValidator, validationResultHandler, create);

module.exports = router;
