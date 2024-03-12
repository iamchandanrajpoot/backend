const express = require("express");
const cors = require("cors")
const sequelize = require("./config/dbConfig");
const itemRouter = require("./routes/itemRoutes");

const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/api", itemRouter)

sequelize
  .sync()
  .then(() => {
    console.log("models synced to db");
    app.listen(4000);
  })
  .catch((err) => console.log(err));
