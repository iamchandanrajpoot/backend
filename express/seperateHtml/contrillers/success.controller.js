const path = require("path");
const rootDir = require("../util/path");

const succussController = (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "succuss.html"));
};

module.exports = succussController;
