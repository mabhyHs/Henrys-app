const express = require("express");
const { getFirst, update } = require("../controllers/burgerBase.controllers");
const {
  postValidator,
  roleValidator,
} = require("../middlewares/burgerBaseValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");
const verifyToken = require("../middlewares/tokenValidation");

const router = express.Router();

router.get("/", getFirst);
router.put(
  "/",
  verifyToken,
  roleValidator,
  postValidator,
  validationResultHandler,
  update
);

module.exports = router;
