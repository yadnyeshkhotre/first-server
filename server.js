//server creation
const http = require("http");

const port = 8081;

const collegeGoal = ["sing a song", "get multiple proposals", "romantic dance"];

http
  .createServer(function (req, res) {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.write("Huiii World!");
    // res.end();
    const { method, url } = req;
    if (url === "/yadnyesh") {
      if (method === "GET") {
        res.writeHead(200, {
          "content-type": "text/html",
        });
        res.write(collegeGoal.toString());
      } else if (method === "POST") {
        let body = " ";
        req
          .on("data", function (data) {
            body += data;
            console.log(data);
          })
          .on("error", function (err) {
            console.log(err);
          })
          .on("end", function () {
            body = JSON.parse(body);
            let newCollegeGoal = collegeGoal;
            newCollegeGoal.push(body.goal);
            console.log(newCollegeGoal);
          });
      } else if (method === "DELETE") {
        let body = " ";
        req.on("error", function (err) {
          console.log(err);
        });
        req.on("data", function (data) {
          body += data;
          console.log(data);
        });
        req.on("end", function () {
          body = JSON.parse(body);
          let deleteItem = body.goal;
          for (let i = 0; i < collegeGoal.length; i++) {
            if (collegeGoal[i] === deleteItem) {
              collegeGoal.splice(i, 1);
              break;
            }
          }
          res.writeHead(204);
        });
      } else {
        res.writeHead(501);
      }
    } else {
      res.writeHead(404);
    }
    res.end();
  })
  .listen(port, () => {
    console.log(`server listening on port ${port}`);
  });
