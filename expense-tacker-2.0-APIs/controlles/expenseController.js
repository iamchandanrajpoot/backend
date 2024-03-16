const Expense = require("../models/expenseModel");

exports.postExpense = async (req, res) => {
  try {
    const { expendicture, description, category } = req.body;
    if (!expendicture || !description || !category) {
      res.json({ message: "please enter all fields" });
    }
    const expense = await Expense.create({
      expendicture,
      description,
      category,
    });
    res.status(201).json(expense);
  } catch (error) {
    console.log(error);
    res.satatus(500).json({ message: "interanl server error" });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.findAll();
    if (expenses) {
      res.status(200).json(expenses);
    }
  } catch (error) {
    console.log(error);
    res.satatus(500).json({ message: "internal server error" });
  }
};
exports.getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findOne({
      where: { id: req.params.expenseId },
    });
    res.status(200).json(expense);
  } catch (error) {
    console.log(error);
    res.satatus(500).json({ message: "internal server error" });
  }
};
exports.deleteExpenseById = async (req, res) => {
  try {
    const response = await Expense.destroy({
      where: { id: req.params.expenseId },
    });
    if (response) {
      res.json({ message: "deleted" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
