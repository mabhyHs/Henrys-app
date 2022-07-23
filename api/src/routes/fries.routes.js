const express = require("express");
const { createFries } = require("../controllers/fries.controllers");
const { postValidator } = require("../middlewares/friesValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");

const router = express.Router();

router.post("/", postValidator, validationResultHandler, createFries);
// router.get('/:id');
// router.post('/');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
