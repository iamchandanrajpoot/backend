const path = require("path");
const rootDir = require("../util/path");

const contact = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

module.exports = contact;
