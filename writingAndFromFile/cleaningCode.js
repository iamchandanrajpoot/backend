const http = require("http");
const routes = require("./routes");
const server = http.createServer(routes);

// routes.requestListner
// routes.dummyFunction

server.listen(8000, () => {
  console.log("server is listening on http://localhost:8000");
});
