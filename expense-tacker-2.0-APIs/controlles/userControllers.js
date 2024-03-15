const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.postRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const isAlreadyRegister = await User.findOne({
      where: { email: email },
    });
    if (isAlreadyRegister) {
      console.log("already a user");
      res.json({
        message: `already register with this email ${req.body.email}`,
      });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      console.log(hashPassword);
      await User.create({ name: name, email: email, password: hashPassword });
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
      if (!(await bcrypt.compare(password, user.password))) {
        res.status(401).json({ message: "User not authorized" });
      } else {
        res.status(200).json({ message: "successfully login" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
