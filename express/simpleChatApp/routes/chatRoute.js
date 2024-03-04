import { Router } from "express";
import data from "../data.js";

const router = Router();

router
  .route("/")
  .get((req, res) => {
    let displayMessage = "No Chat Exit";
    if (data.length > 0) {
      displayMessage = data.join(" ");
    }

    res.send(`
      <html>
        <head>
          <title>chat</title>
        </head>
        <body>
          <p>${displayMessage}</p>
          <form onsubmit="document.getElementById('username').value = localStorage.getItem('username')"
           action="/" method="post">
            <input type ="text" name ="message" id = "message"/>
            <input type ="hidden" name ="username" id = "username"/>
            <button type = "submit">Send</button>
          </form>
        </body>
      </html>
   `);
  })
  .post((req, res) => {
    data.push(`${req.body.username}: ${req.body.message}`);
    // console.log(data);
    res.redirect("/");
  });

export default router;
