const express = require("express");
const usersRouter = require("./users.routes");
const friesRouter = require("./fries.routes");
const ingredientRouter = require("./ingredient.routes");
const burgerRouter = require("./burger.routes");
const beverageRouter = require("./beverage.routes");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/fries", friesRouter);
router.use("/ingredients", ingredientRouter);
router.use("/burgers", burgerRouter);
router.use("/beverages", beverageRouter);

module.exports = router;
