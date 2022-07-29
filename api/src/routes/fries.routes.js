const express = require("express");
const {
  create,
  destroy,
  update,
  restore,
} = require("../controllers/fries.controllers");
const {
  postValidator,
  putValidator,
} = require("../middlewares/friesValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, create);
router.delete("/:id", destroy);
router.post("/:id", restore);
router.put("/", putValidator, validationResultHandler, update);

module.exports = router;
