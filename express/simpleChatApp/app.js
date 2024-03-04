import express from "express";
const app = express();
import loginRoute from "./routes/loginRoute.js";
import chatRoute from "./routes/chatRoute.js";

// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use("/login", loginRoute);
app.use("/", chatRoute);

app.listen(8000, () => {
  console.log("app is running on http://localhost:8000");
});
