import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send(`
          <html>
          <head>
              <title>welcome!</title>
          </head>
          <body>
           <form onsubmit="localStorage.setItem('username',
             document.getElementById('username').value)" action="/" 
             method="get">
          <input id="username" type="text" name"title">
          <button type="submit">Login</button>
         </form>
          </body>
          </html>
      `);
});

export default router;
{
  /* <form action = "/" method="post"> */
}
