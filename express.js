var express = require("express");
var app = express();
var collegeGoals = ["girls proposals", "car", "internship"];
var port = 8081;
app.use(express.json());

app.get("/yadnyesh", (req, res) => {
  res.status(200);
  res.send(collegeGoals);
});

app.post("/yadnyesh", (req, res) => {
  let newCollegeGoals = req.body.goal;
  collegeGoals.push(newCollegeGoals);
  res.status(201);
  res.send({
    message: "added successfully-'${req.body.goal}'",
  });
});

app.delete("/yadnyesh", (req, res) => {
  const deleteGoal = req.body.goal;
  collegeGoals.find((element, index) => {
    if (element === deleteGoal) {
      collegeGoals.splice(index, 1);
      res.status(202);
      res.send({
        message: `removed successfully-${req.body.goal}`,
      });
    }
  });
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
