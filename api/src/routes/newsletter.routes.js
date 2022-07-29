const express = require("express");
const { get, create, sendEmails, destroy, restore } = require("../controllers/newsletter.controllers");

const router = express.Router();

router.get("/", get);
router.post("/", create);
router.post("/send", sendEmails);
router.delete("/:id", destroy);
router.post("/:id", restore);

module.exports = router;
