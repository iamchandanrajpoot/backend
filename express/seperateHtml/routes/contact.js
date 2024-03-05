const express = require("express");

const contactController = require("../contrillers/contact.controller");

const router = express.Router();

router.get("/", contactController);

module.exports = router;
