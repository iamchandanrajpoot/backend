import Expense from "../models/expenses.js";

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal sever error" });
  }
};

const postExpenses = async (req, res) => {
  const { amount, description, category } = req.body;
  try {
    const expenseData = await Expense.create({ amount, description, category });
    res.json(expenseData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal sever error" });
  }
};

const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findByPk(req.params.expenseId);
    res.json(expense);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteExpenseById = async (req, res) => {
  try {
    const result = await Expense.destroy({
      where: { id: req.params.expenseId },
    });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateExpenseById = async (req, res) => {
  try {
    const result = await Expense.update(req.body, {
      where: { id: req.params.expenseId },
    });
    res.json({ message: result });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  getExpenses,
  postExpenses,
  updateExpenseById,
  deleteExpenseById,
  getExpenseById,
};
