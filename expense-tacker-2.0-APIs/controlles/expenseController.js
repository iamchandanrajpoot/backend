// const Expense = require("../models/expenseModel");
const sequelize = require("../config/dbConfig");
const User = require("../models/userModel");

exports.postExpense = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const userInstance = await User.findByPk(req.user.id);
    const { expendicture, description, category } = req.body;
    if (!expendicture || !description || !category) {
      res.json({ message: "Please enter all fields" });
    }
    const expense = await userInstance.createExpense(
      {
        expendicture,
        description,
        category,
      },
      { transaction: t }
    );
    await userInstance.update(
      {
        totalExpense:
          parseInt(userInstance.totalExpense) + parseInt(expendicture),
      },
      { transaction: t }
    );
    await t.commit();
    res.status(201).json({ successful: true, expense });
  } catch (error) {
    t.rollback();
    // console.log(error);
    res
      .status(500)
      .json({ successful: false, message: "interanl server error" });
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
    res.status(500).json({ message: "internal server error" });
  }
};
exports.getExpenseById = async (req, res) => {
  try {
    const userInstance = await User.findByPk(req.user.id);
    const expenses = await userInstance.getExpenses({
      where: { id: req.params.expenseId },
    });
    res.status(200).json(expenses[0]);
  } catch (error) {
    console.log(error);
    res.satatus(500).json({ message: "internal server error" });
  }
};
exports.deleteExpenseById = async (req, res) => {
  const t = await sequelize.transaction();
  try {
    const userInstance = await User.findByPk(req.user.id);
    const expenses = await userInstance.getExpenses({
      where: { id: req.params.expenseId },
    });
    const updatedExpense =
      parseInt(userInstance.totalExpense) - parseInt(expenses[0].expendicture);
    await expenses[0].destroy({transaction: t});
    await userInstance.update({ totalExpense: updatedExpense }, {transaction: t});

    await t.commit()
    return res.json({ message: "Deleted" });
  } catch (error) {
    await t.rollback();
    // console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
