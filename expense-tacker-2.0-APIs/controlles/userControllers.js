const User = require("../models/userModel");

exports.postRegister = async (req, res) => {
  try {
    const isAlreadyRegister = await User.findOne({
      where: { email: req.body.email },
    });
    if (isAlreadyRegister) {
      res.json({ message: "already register with this email" });
    }
    await User.create(req.body);
    res.json({ message: "succussfully register" });
  } catch (error) {
    console.log(error);
    res.json({ message: "internal server error" });
  }
};
