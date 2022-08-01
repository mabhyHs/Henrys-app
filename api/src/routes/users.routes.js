const express = require("express");
const {
  getAllSecure,
  create,
  destroy,
  restore,
  update,
} = require("../controllers/users.controllers");
const { roleValidator } = require("../middlewares/usersValidation");
const validationResultHandler = require("../middlewares/validationResultHandler");
const verifyToken = require("../middlewares/tokenValidation");

const router = express.Router();

router.get(
  "/",
  verifyToken,
  roleValidator,
  validationResultHandler,
  getAllSecure
);
router.post("/", verifyToken, roleValidator, validationResultHandler, create);
router.delete(
  "/:id",
  verifyToken,
  roleValidator,
  validationResultHandler,
  destroy
);
router.post(
  "/:id",
  verifyToken,
  roleValidator,
  validationResultHandler,
  restore
);
router.put("/", verifyToken, validationResultHandler, update);

module.exports = router;
