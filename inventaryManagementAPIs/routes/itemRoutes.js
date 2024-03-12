const { Router } = require("express");
const {
  getItems,
  postAddItem,
  upadeItemById,
  getItemById,
} = require("../controllers/itemControllers");

const router = Router();

router.get("/:itemId", getItemById);
router.get("/", getItems);
router.post("/", postAddItem);
router.put("/:itemId", upadeItemById);

module.exports = router;
