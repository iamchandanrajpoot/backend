const path = require("path");
const rootDir = require("../util/path");

const addProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

const showProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

module.exports = { addProduct, showProduct };
