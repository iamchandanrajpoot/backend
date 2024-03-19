const { Router } = require("express");
const {
  postRegister,
  postLogin,
  getUser,
} = require("../controlles/userControllers");
const autherizeUser = require("../middlewares/autherizeUser");

const router = Router();

router.post("/register", postRegister);
router.post("/login", postLogin);
router.get("/", autherizeUser, getUser);

module.exports = router;
