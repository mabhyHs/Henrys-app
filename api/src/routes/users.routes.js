const express = require("express");
const {
  getAllSecure,
  create,
  destroy,
  restore,
  update,
  updateProfileData,
  getById,
  setFavorites,
  getFavoritesByUserId,
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

router.get("/:id", getById);

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

router.put("/:id", verifyToken, validationResultHandler, updateProfileData);

router.put("/", verifyToken, roleValidator, validationResultHandler, update);

router.put("/favorites/:id", setFavorites);
router.get("/favorites/:id", getFavoritesByUserId);

module.exports = router;
