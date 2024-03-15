const User = require("../models/userModel");
const { use } = require("../routes/userRoutes");

exports.postRegister = async (req, res) => {
  try {
    const isAlreadyRegister = await User.findOne({
      where: { email: req.body.email },
    });
    if (isAlreadyRegister) {
      console.log("already a user");
      res.json({
        message: `already register with this email ${req.body.email}`,
      });
    } else {
      await User.create(req.body);
      res.json({ message: "succussfully register" });
    }
  } catch (error) {
    console.log(error);
    res.json({ message: "internal server error" });
  }
};

exports.postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      if (password !== user.password) {
        res.status(401).json({ message: "User not authorized" });
      }
    }
    if (user && user.password == password) {
      console.log(user);
      res.status(200).json({ message: "successfully login" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
