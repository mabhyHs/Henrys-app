const express = require("express");
const { getByQuery } = require("../controllers/product.controllers");

const router = express.Router();

router.get("/", getByQuery);

module.exports = router;
