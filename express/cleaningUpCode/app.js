import bodyParser from "body-parser";
import express from "express";

import adminRoutes from "./admin";
import shopRoutes from "./shop";

const app = express();
// body-parser middleware is used to parse body of incoming http request
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(4000);
