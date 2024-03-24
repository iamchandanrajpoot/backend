const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const expenseRouter = require("./routes/expenseRoutes");
const purchaseRouter = require("./routes/purchaseRoutes");
const forgetPswRouter = require("./routes/forgetPswRoutes");

// associations
require("./models/associations/use_expense");
require("./models/associations/user_order");
require("./models/associations/user_ForgotPasswordRequest");
require("./models/associations/user_downloadFiles");

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(helmet());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use("/user", userRouter);
app.use("/api", expenseRouter);
app.use("/purchase", purchaseRouter);
app.use("/password", forgetPswRouter);

sequelize
  .sync()
  // .sync({force: true})
  .then(() => {
    console.log("models synced ");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });
