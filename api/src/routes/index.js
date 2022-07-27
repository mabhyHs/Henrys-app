const express = require("express");
// const usersRouter = require("./users.routes");
const friesRouter = require("./fries.routes");
const ingredientRouter = require("./ingredient.routes");
const burgerRouter = require("./burger.routes");
const comboRouter = require("./combo.routes");
const beverageRouter = require("./beverage.routes");
const productRouter = require("./product.routes");
const authRouter = require("./auth.routes");
const loginRouter = require("./login.routes");
const activateAccount = require("./activateAccount.routes");
const authGoogle = require("./authGoogle.routes");

const router = express.Router();

// router.use("/users", usersRouter);
router.use("/register", authRouter);
router.use("/login", loginRouter);
router.use("/google", authGoogle);
router.use("/activateAccount", activateAccount);
router.use("/fries", friesRouter);
router.use("/ingredients", ingredientRouter);
router.use("/burgers", burgerRouter);
router.use("/combos", comboRouter);
router.use("/beverages", beverageRouter);
router.use("/products", productRouter);

module.exports = router;
