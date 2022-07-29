const express = require("express");
const {
  create,
  destroy,
  restore,
  update,
} = require("../controllers/users.controllers");

const router = express.Router();

router.post("/", create);
router.delete("/:id", destroy);
router.post("/:id", restore);
router.put("/", update);

module.exports = router;
