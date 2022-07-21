const express = require("express");
const { create } = require("../controllers/ingredient.controllers");

const router = express.Router();

router.post("/", create);

module.exports = router;
