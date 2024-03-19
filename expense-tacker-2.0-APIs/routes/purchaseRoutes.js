const { Router } = require("express");
const { purchasePremium, updateTransactionStatus } = require("../controlles/purchaseController");
const autherizeUser = require("../middlewares/autherizeUser");

const router = Router();

router.get("/premium-membership", autherizeUser,purchasePremium)
router.post("/update-transaction-status", autherizeUser,updateTransactionStatus)

module.exports = router;