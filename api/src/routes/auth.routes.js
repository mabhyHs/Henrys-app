const express = require("express");
const { create } = require("../controllers/users.controllers");
// const { postValidator } = require("../middlewares/comboValidation");
// const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", create);

module.exports = router;
