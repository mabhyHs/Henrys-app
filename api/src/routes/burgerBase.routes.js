const express = require("express");
const { getFirst, update } = require("../controllers/burgerBase.controllers");

const router = express.Router();

router.get("/", getFirst);
router.put("/", update);

module.exports = router;
