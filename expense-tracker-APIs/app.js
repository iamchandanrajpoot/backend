import express from "express";
import cors from "cors";
import sequelize from "./config/dbConfig.js";
import expenseRouter from "./routes/expensesRoutes.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use("/api", expenseRouter);

sequelize
  .sync()
  .then(() => {
    console.log("model synced to db");
    app.listen(8000);
  })
  .catch((err) => console.log(err));
