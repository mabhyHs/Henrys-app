const express = require("express");
const usersRouter = require("./users.routes");
const friesRouter = require("./fries.routes");
const ingredientRouter = require("./ingredient.routes");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/fries", friesRouter);
router.use("/ingredients", ingredientRouter);

module.exports = router;
