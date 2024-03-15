const express = require("express");
const cors = require("cors");

const sequelize = require("./config/dbConfig");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/user", userRouter);

sequelize
  .sync()
  // .sync({force: true})
  .then(() => {
    console.log("models synced ");
    app.listen(4000);
  })
  .catch((err) => {
    console(err);
  });
