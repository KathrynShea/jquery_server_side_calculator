const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 5000;

let answer;
const pastCalculations = [];

app.use(express.static("server/public"));
app.use(express.urlencoded({ extended: true }));

//post request to save entered information
app.post("/selectedValues", function (req, res) {
  console.log(req.body.num1);
  console.log(req.body.num2);
  console.log(req.body.operator);

  let num1 = req.body.num1;
  let num2 = req.body.num2;
  let operator = req.body.operator;

  doCalculation(num1, num2, operator);

  res.sendStatus(200);
});

function doCalculation(num1, num2, operator) {
  console.log("in do calculation function");

  if (operator === "+") {
    answer = Number(num1) + Number(num2);
  } else if (operator === "-") {
    answer = Number(num1) - Number(num2);
  } else if (operator === "*") {
    answer = Number(num1) * Number(num2);
  } else if (operator === "/") {
    answer = (Number(num1) / Number(num2)).toFixed(2);
  }

  let currentCalculation = {
    num1,
    num2,
    operator,
    answer,
  };
  console.log(pastCalculations);
  pastCalculations.push(currentCalculation);
  console.log(pastCalculations);
}

//get request to send answer back
app.get("/answer", function (req, res) {
  res.send(pastCalculations).status(200);
});

app.listen(PORT, function () {
  console.log("listening on port ", PORT);
});
