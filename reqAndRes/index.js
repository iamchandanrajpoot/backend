const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Welcome to my Node Js project</h1>");
  if (req.url == "/home") {
    res.end(`<h1>Welcome home</h1>`);
  }
  if (req.url == "/about") {
    res.end("<h1>Welcome to about us page</h1>");
  }
  if (req.url == "/node") {
    res.end("<h1>Welcome to my Node Js project</h1>");
  }
});

server.listen(8000, () => {
  console.log("server is running on http://localhost:8000");
});
