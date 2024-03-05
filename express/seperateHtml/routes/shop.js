const express = require("express");
const shopController = require("../contrillers/shop.controller");

const router = express.Router();

router.get("/", shopController);

module.exports = router;
