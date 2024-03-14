const { Router } = require("express");
const { postRegister } = require("../controlles/userControllers");

const router = Router();

router.post("/register", postRegister)

module.exports = router;