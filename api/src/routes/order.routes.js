const express = require("express");
const {
  create,
  getAll,
  changeStatus,
  getAllByUserId,
} = require("../controllers/order.controllers");
const verifyToken = require("../middlewares/tokenValidation");
const {
  roleValidator,
  putValidator,
} = require("../middlewares/orderValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", verifyToken, create);
router.get("/", verifyToken, roleValidator, validationResultHandler, getAll);
router.get("/user", verifyToken, validationResultHandler, getAllByUserId);
router.put(
  "/:id",
  verifyToken,
  putValidator,
  validationResultHandler,
  changeStatus
);

module.exports = router;
