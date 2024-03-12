import { Router } from "express";
import {
  deleteExpenseById,
  getExpenseById,
  getExpenses,
  postExpenses,
  updateExpenseById,
} from "../controllers/expensesController.js";

const router = Router();

router.get("/", getExpenses);
router.get("/:expenseId", getExpenseById);
router.post("/", postExpenses);
router.put("/:expenseId", updateExpenseById);
router.delete("/:expenseId", deleteExpenseById);

export default router;
