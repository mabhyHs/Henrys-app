const express = require("express");
const {
  create,
  destroy,
  restore,
  update,
} = require("../controllers/burger.controllers");
const { postValidator } = require("../middlewares/burgerValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);
router.delete("/:id", destroy);
router.post("/:id", restore);
router.put("/", postValidator, validationResultHandler, update);

module.exports = router;
