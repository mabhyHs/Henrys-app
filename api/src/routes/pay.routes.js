const express = require("express");
const { check } = require("../controllers/mercadopago.controllers");
const verifyToken = require("../middlewares/tokenValidation");

const router = express.Router();

router.post("/mercadopago", verifyToken, check);

module.exports = router;
