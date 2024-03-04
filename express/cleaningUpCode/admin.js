import { Router } from "express";

const router = Router();

router.get("/add-product", (req, res, next) => {
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
router.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

export default router;
