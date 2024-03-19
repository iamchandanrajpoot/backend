const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
dotenv.config();

const sequelize = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");
const expenseRouter = require("./routes/expenseRoutes");
const purchaseRouter = require("./routes/purchaseRoutes");

// associations
require("./models/associations/use_expense")
require("./models/associations/user_order")

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRouter);
app.use("/api", expenseRouter);
app.use("/purchase", purchaseRouter);

sequelize
  .sync()
  // .sync({force: true})
  .then(() => {
    console.log("models synced ");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
