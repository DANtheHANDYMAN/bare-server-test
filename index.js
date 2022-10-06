// (async() => {
//   await import('./index.mjs');
//   // await import("./static/users_test.js");
// })();


// // ! https://andrewbaisden.medium.com/how-to-deploy-a-node-express-app-to-vercel-6fa567a041e2



// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello World!");
  })
  .listen(8080);