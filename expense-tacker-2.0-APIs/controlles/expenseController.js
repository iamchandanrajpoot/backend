// const Expense = require("../models/expenseModel");
const User = require("../models/userModel");

exports.postExpense = async (req, res) => {
  try {
    console.log("i am comming inside post request")
    const userInstance = await User.findByPk(req.user.id);
    const { expendicture, description, category } = req.body;
    if (!expendicture || !description || !category) {
      res.json({ message: "Please enter all fields" });
    }
    const expense = await userInstance.createExpense({
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
    const userInstance = await User.findByPk(req.user.id);
    const expenses = await userInstance.getExpenses();
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
    const userInstance = await User.findByPk(req.user.id);
    const expenses = await userInstance.getExpenses( {where: { id: req.params.expenseId },
    });
    res.status(200).json(expenses[0]);
  } catch (error) {
    console.log(error);
    res.satatus(500).json({ message: "internal server error" });
  }
};
exports.deleteExpenseById = async (req, res) => {
  try {
    const userInstance = await User.findByPk(req.user.id);
    const expenses = await userInstance.getExpenses( {where: { id: req.params.expenseId },
    });
    
    const deleteResponse = await expenses[0].destroy();

    if (deleteResponse) {
      return res.json({ message: "Deleted" });
    } else {
      return res.status(500).json({ message: "Failed to delete expense" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
