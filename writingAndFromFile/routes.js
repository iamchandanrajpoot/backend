const fs = require("fs");
const querystring = require("querystring");
const url = require("url");

const requestListner = (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  if (parsedUrl.pathname === "/") {
    fs.readFile("message.txt", (err, data) => {
      if (err) {
        // if file not exit
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
            <html>
              <head>
                <title>welcome</title>
              </head>
              <body>
                <form action="/form-submit" method="post">
                  <input type="text" name="message"/>
                  <button type="submit">send</button>
                </form>
              </body>
            </html>`);
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(`
          <html>
            <head>
              <title>welcome</title>
            </head>
            <body>
              <h1>${data.toString() || ""}</h1>
              <form action="/form-submit" method="post">
                <input type="text" name="message"/>
                <button type="submit">send</button>
              </form>
            </body>
          </html>`);
        res.end();
      }
    });
  } else if (req.method === "POST" && parsedUrl.pathname === "/form-submit") {
    let body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      body = Buffer.concat(body).toString();
      let parseData = querystring.parse(body).message;
      //   console.log(parseData);
      fs.writeFile("message.txt", parseData, (err) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error");
          return;
        }

        res.writeHead(302, {
          Location: "/",
        });
        res.end();
      });
    });
  } else {
    // handle other url
    res.writeHead(404);
    res.end("Not Found");
  }
};

module.exports = requestListner;

// modue.exports = {
// requestListner,
// dummyFunction
// }
