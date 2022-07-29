const express = require("express");
const {
  create,
  destroy,
  restore,
  update,
} = require("../controllers/beverage.controllers");
const {
  postValidator,
  putValidator,
} = require("../middlewares/beverageValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");
const verifyToken = require("../middlewares/tokenValidation");

const router = express.Router();

router.post("/", verifyToken, postValidator, validationResultHandler, create);
router.delete("/:id", destroy);
router.post("/:id", restore);
router.put("/", putValidator, validationResultHandler, update);

module.exports = router;
