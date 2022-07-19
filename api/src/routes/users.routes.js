const express = require('express');
const { sayHello } = require('../controllers/users.controllers');

const router = express.Router();

router.get('/', sayHello);
// router.get('/:id');
// router.post('/');
// router.put('/:id');
// router.delete('/:id');

module.exports = router;
