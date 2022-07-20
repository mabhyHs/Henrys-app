const express = require("express");
const usersRouter = require("./users.routes");
const friesRouter = require("./fries.routes");

const router = express.Router();

router.use("/users", usersRouter);
router.use("/fries", friesRouter);

module.exports = router;
