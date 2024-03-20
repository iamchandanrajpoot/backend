const transporter = require("../config/nodemailer");
const { v4: uuidv4 } = require('uuid');

exports.forgetPsw = async (req, res) => {
  try {
    const { email } = req.body;
    const token = uuidv4();
    const info = await transporter.sendMail({
        from: "iamchandanrajpoot@gmail.com",
        to: email,
        subject: 'hello my darling Girja',
        html: `<p>Click <a href="http://example.com/reset-password/${token}">here</a> to reset your password.</p>`
    })
    console.log(info);
    return res.send({ email });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
