const User = require("../models/userModel");

exports.postRegister = async (req, res) => {
  try {
    const isAlreadyRegister = await User.findOne({
      where: { email: req.body.email },
    });
    if (isAlreadyRegister) {
      console.log("already a user")
      res.json({ message: `already register with this email ${req.body.email}`});
    } else {
      await User.create(req.body);
      res.json({ message: "succussfully register" });
    }
  } catch (error) {
    console.log(error); 
    res.json({ message: "internal server error" });
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user || user.password !== password) {
      res.status(401).json({ message: "Invalalid email or password" });
    } else {
      console.log(user);
      res.status(200).json({ message: "successfully login" });
      // next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
