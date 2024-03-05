const path = require("path");
const rootDir = require("../util/path");

const shop = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};

module.exports = shop;
