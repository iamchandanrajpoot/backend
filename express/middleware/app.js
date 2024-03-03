import express from "express";

const app = express();
app.use((req, res, next) => {
  console.log("first middleware");
  next();
});
app.use((req, res, next) => {
  console.log("second middleware");
  res.send("<h1>hello express learnes</h1>");
});

app.listen(8000, () => {
  console.log(`app is running on http://localhost:8000`);
});
