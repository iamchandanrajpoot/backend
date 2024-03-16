const { Router } = require("express");
const { postExpense, getExpenses, getExpenseById, deleteExpenseById } = require("../controlles/expenseController");

const router =Router();

router.post("/add-expense", postExpense);
router.get("/add-expense", getExpenses);
router.get("/add-expense/:expenseId", getExpenseById);
router.delete("/add-expense/:expenseId", deleteExpenseById);

module.exports = router;