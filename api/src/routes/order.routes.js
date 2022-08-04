const express = require("express");
const {
  create,
  getAll,
  changeStatus,
} = require("../controllers/order.controllers");
const verifyToken = require("../middlewares/tokenValidation");
const {
  roleValidator,
  putValidator,
  postValidator,
} = require("../middlewares/orderValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", verifyToken, postValidator, validationResultHandler, create);
router.get("/", verifyToken, roleValidator, validationResultHandler, getAll);
router.put(
  "/:id",
  verifyToken,
  putValidator,
  validationResultHandler,
  changeStatus
);

module.exports = router;
