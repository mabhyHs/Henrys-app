const express = require("express");
const {
  create,
  destroy,
  update,
  restore,
} = require("../controllers/fries.controllers");
const { postValidator } = require("../middlewares/friesValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);
router.delete("/:id", destroy);
router.put("/:id", update);
router.post("/:id", restore);

module.exports = router;
