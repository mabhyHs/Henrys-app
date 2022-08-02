const express = require("express");
const { check } = require("../controllers/mercadopago.controllers");
const verifyToken = require("../middlewares/tokenValidation");
const { validatePurchase } = require("../middlewares/purchaseValidation");

const router = express.Router();

router.post("/mercadopago", verifyToken, validatePurchase, check);

module.exports = router;
