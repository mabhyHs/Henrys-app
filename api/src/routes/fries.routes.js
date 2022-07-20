const express = require("express");
const { createFries } = require("../controllers/fries.controllers");

const router = express.Router();

router.post("/", createFries);
// router.get('/:id');
// router.post('/');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
