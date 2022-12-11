// Eveything need to be known about servers and http module is here

// 1.The built in http module:
// Node.js has a build in module called HTTP which allows node.js to transfer data over Hyper text transfer protocal
//To include HTTP, use the require() method:
const http = require("http");
const port = 8080;
//2.Creating server using http module and createServer method:
//The http module can create a server using createServer method that listens to the server ports and response back to the clint.

//create a server object
// http
//   .createServer(function (req, res) {
//     res.write("Hello Yadnyesh"); //write a response to the client
//     res.end(); //end the response
//   })
//   .listen(8080); //listens on port 8080

//3.Adding an http header
//we will be using writeHead method which containes two attributes the first is response code like succes code(200) and the other one is content type:

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, {
//       "content-type": "text/html",
//       "content-creator": "yadnyesh khotre",
//     });
//     res.write(
//       "Hello yadnyesh this is an example to demonstrate the writeHead method"
//     );
//     res.end();
//   })
//   .listen(8080);

//4.URL
//The http.createServer method contains a function which holds two attributes one is req and the second one is res.
//The request that has been made from the clint side to the server(http.Incoming message object)
//This object which comes after the domain name is called the url.

// http
//   .createServer(function (req, res) {
//     res.writeHead(200, {
//       "content-type": "text/html",
//       "content-creator": "yadnyesh",
//     });
//     res.write(req.url);
//     res.end();
//   })
//   .listen(port);

//5.Split the query string.
//There are built in modules to easily split the queries into redable strings.
//http://localhost:8080/?year=2021&month=december

const url = require("url");

http
  .createServer(function (req, res) {
    res.writeHead(200, {
      "content-type": "text/html",
      "content-creator": "yadnyesh",
    });
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;
    res.write(text);
    res.end();
  })
  .listen(port);
