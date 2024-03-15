const { Router } = require("express");
const { postRegister, postLogin } = require("../controlles/userControllers");

const router = Router();

router.post("/register", postRegister)
router.post("/Login", postLogin)

module.exports = router;