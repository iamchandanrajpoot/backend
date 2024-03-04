import express from "express";
const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.get("/login", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>welcome!</title>
      </head>
      <body>
        <form action="/" 
          method="post" onsubmit="localStorage.setItem('username',
          document.getElementById('username').value)" >
          <input id="username" type="text" name"title">
          <button type="submit">Login</button>
        </form>
      </body>
    </html>
  `);
});

// app.use("/login", loginRoute);
// app.use("/", chatRoute);
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.username);

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

app.listen(8000, () => {
  console.log("app is running on http://localhost:8000");
});
