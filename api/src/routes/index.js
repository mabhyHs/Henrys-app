const express = require("express");

const authRouter = require("./auth.routes");
const loginRouter = require("./login.routes");
const activateAccount = require("./activateAccount.routes");
const authGoogle = require("./authGoogle.routes");
const passwordRecovery = require("./passwordRecovery.routes");

const usersRouter = require("./users.routes");

const friesRouter = require("./fries.routes");
const ingredientRouter = require("./ingredient.routes");
const burgerRouter = require("./burger.routes");
const comboRouter = require("./combo.routes");
const beverageRouter = require("./beverage.routes");
const productRouter = require("./product.routes");
const burgerBaseRouter = require("./burgerBase.routes");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/register", authRouter);
router.use("/login", loginRouter);
router.use("/google", authGoogle);
router.use("/activateAccount", activateAccount);
router.use("/passwordRecovery", passwordRecovery);

router.use("/fries", friesRouter);
router.use("/ingredients", ingredientRouter);
router.use("/burgers", burgerRouter);
router.use("/combos", comboRouter);
router.use("/beverages", beverageRouter);
router.use("/products", productRouter);
router.use("/burgerBase", burgerBaseRouter);

module.exports = router;
