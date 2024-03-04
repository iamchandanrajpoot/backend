import bodyParser from "body-parser";
import express from "express";

import adminRoutes from "./admin.js";
import shopRoutes from "./shop.js";

const app = express();
// body-parser middleware is used to parse body of incoming http request
app.use(bodyParser.urlencoded({ extended: false }));

// filter admin product
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found!</h1>");
});

app.listen(4000);
