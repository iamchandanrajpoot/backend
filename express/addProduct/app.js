import bodyParser from "body-parser";
import express from "express";

const app = express();
// body-parser middleware is used to parse body of incoming http request
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(`
    <form action = "product" method= "post">
    <input
      type= "text"
      name = "title"
      placeholder ="Enter product title here..."
    /><br/><br/>
    <input
      type= "number"
      name = "size"
      placeholder="Enter product size here..."
    /><br/><br/>
    <button type = "submit">Add</button>
    </form> 
    `);
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Welocome to express tutorials</h1>");
});

app.listen(4000);
