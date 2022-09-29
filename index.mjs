// import BareClient from "@tomphttp/bare-client";

// const client = new BareClient("https://uv.holyubofficial.net/");

// // ...

// const response = await client.fetch("https://www.google.com/");

// console.log(response.status, await response.text());


import createBareServer from "@tomphttp/bare-server-node";
import http from "http";

const httpServer = http.createServer();

const bareServer = createBareServer("/bare/", {
  logErrors: false,
  localAddress: undefined,
  maintainer: {
    email: "tomphttp@sys32.dev",
    website: "https://github.com/tomphttp/",
  },
});
// console.log(bareServer)

httpServer.on("request", (req, res) => {
  // console.log("eeeeeeee") //* this goes when you open the site
  // console.clear()
  // res.send("Hello, World!");
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
    console.log(res)
    // res.set("Access-Control-Allow-Origin", "*");
    // res.headers.set("Access-Control-Allow-Origin", "*");

    // console.log("Hi")
  } else {
    res.writeHead(400);
	// response.headers.set("x-robots-tag", "noindex");
  // response.headers.set("access-control-allow-headers", "*");
  // response.headers.set("access-control-allow-origin", "*");
  // response.headers.set("access-control-allow-methods", "*");
  // response.headers.set("access-control-expose-headers", "*");


      // res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.send("Not found.");
    // https://www.stackhawk.com/blog/nodejs-cors-guide-what-it-is-and-how-to-enable-it/#how-to-enable-cors-on-a-server
    // https://www.youtube.com/watch?v=bo0Asv8L9Vg
    //https://enable-cors.org/server_expressjs.html
    //X https://github.com/expressjs/cors
    //X https://expressjs.com/en/resources/middleware/cors.html
  }
});

httpServer.on("upgrade", (req, socket, head) => {
  // console.log("eeeeeee")
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

httpServer.on("listening", () => {
  console.log("HTTP server listening");
});

httpServer.listen({
  port: 8081,
});