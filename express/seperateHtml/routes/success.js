const express = require("express");

const succussController = require("../contrillers/success.controller");

const router = express.Router();

router.post("/", succussController);

module.exports = router;
