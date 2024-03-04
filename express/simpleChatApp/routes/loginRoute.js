import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>welcome</title>
      </head>
      <body>
        <form action="/" 
          method="get" onsubmit="localStorage.setItem('username',
          document.getElementById('username').value)" >
          <input id="username" type="text" name = "username" >
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

export default router;
