const express = require("express");
const { check } = require("../controllers/mercadopago.controllers");
const verifyToken = require("../middlewares/tokenValidation");
const {
  validatePurchase,
  applyCupons,
} = require("../middlewares/purchaseValidation");

const router = express.Router();

router.post("/mercadopago", verifyToken, validatePurchase, applyCupons, check);

module.exports = router;
