const express = require("express");
const sequelize = require("./config/dbConfig");

const app = express();

sequelize
  .sync()
  .then(() => {
    console.log("models synced "), app.listen(4000);
  })
  .catch((err) => {
    console(err);
  });
