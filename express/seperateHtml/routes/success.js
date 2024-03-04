const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.post("/", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "succuss.html"));
});

module.exports = router;
