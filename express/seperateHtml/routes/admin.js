const express = require("express");

const adminControllers = require("../contrillers/admin.controller");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminControllers.addProduct);

// /admin/add-product => POST
router.post("/add-product", adminControllers.showProduct);

module.exports = router;
