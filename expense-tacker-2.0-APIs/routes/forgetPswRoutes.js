const { Router } = require("express");
const { forgetPsw } = require("../controlles/forgetPswController");

const router = Router();

router.post("/forgotpassword", forgetPsw)
module.exports = router;