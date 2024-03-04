import { Router } from "express";

// import fs from "fs";
const router = Router();
router.post("/", (req, res) => {
  console.log(req.body);

  res.send(`
      <html>
      <head>
         <title>chat</title>
      </head>
      <body>
      <form onsubmit ="" action="/" method="post">
          <input type ="text" name ="message" id = "message"/>
          <button type = "submit">Send</button>
      </form>
    
      </body>
      </html>
      `);
});

export default router;
