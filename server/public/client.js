$(document).ready(onReady);

function onReady() {
  console.log("JS and JQ working");
  startCalculator();
  //listen for a click on a number
  $(".c").on("click", startCalculator);
  $(".equals").on("click", submitCalculation);
  //click listener for numbers
  $(".numButton").on("click", assignValue);
}

let num1;
console.log(num1);
let num2;
let operator;
let setOfInfo = {};

function startCalculator(event) {
  //reseting all values
  num1 = undefined;
  num2 = undefined;
  operator = undefined;

  //reset top calculation box to "0"
  $("#showNumbers").text(0);
}

function assignValue(event) {
  // check if num1 has already been selected
  if (num1 === undefined && operator === undefined) {
    //if not, then assign num1 the selected value
    if ($(event.target).hasClass("0")) {
      num1 = 0;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("1")) {
      num1 = 1;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("2")) {
      num1 = 2;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("3")) {
      num1 = 3;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("4")) {
      num1 = 4;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("5")) {
      num1 = 5;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("6")) {
      num1 = 6;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("7")) {
      num1 = 7;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("8")) {
      num1 = 8;
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("9")) {
      num1 = 9;
      $("#showNumbers").text(num1);
    }
  } else if (num1 !== undefined && operator === undefined) {
    //if num1 is already assigned a value and the operator has not been selected, keep adding the number to num1
    if ($(event.target).hasClass("0")) {
      num1 += "0";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("1")) {
      num1 += "1";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("2")) {
      num1 += "2";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("3")) {
      num1 += "3";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("4")) {
      num1 += "4";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("5")) {
      num1 += "5";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("6")) {
      num1 += "6";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("7")) {
      num1 += "7";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("8")) {
      num1 += "8";
      $("#showNumbers").text(num1);
    } else if ($(event.target).hasClass("9")) {
      num1 += "9";
      $("#showNumbers").text(num1);
    }
  } else if (operator !== undefined) {
    if (num2 === undefined) {
      if ($(event.target).hasClass("0")) {
        num2 = 0;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("1")) {
        num2 = 1;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("2")) {
        num2 = 2;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("3")) {
        num2 = 3;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("4")) {
        num2 = 4;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("5")) {
        num2 = 5;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("6")) {
        num2 = 6;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("7")) {
        num2 = 7;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("8")) {
        num2 = 8;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      } else if ($(event.target).hasClass("9")) {
        num2 = 9;
        $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      }
    } else if (num2 !== undefined){
        if ($(event.target).hasClass("0")) {
            num2 += "0";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("1")) {
            num2 += "1";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("2")) {
            num2 += "2";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("3")) {
            num2 += "3";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("4")) {
            num2 += "4";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("5")) {
            num2 += "5";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("6")) {
            num2 += "6";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("7")) {
            num2 += "7";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("8")) {
            num2 += "8";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          } else if ($(event.target).hasClass("9")) {
            num2 += "9";
            $("#showNumbers").text(`${num1} ${operator} ${num2}`);
          }
    }
    //$("#showNumbers").text(`${num1} ${operator} ${num2}`);
  }

  //listen for an operator click
  $(".operator").on("click", assignOperator);
}

function assignOperator(event) {
  //assign operator to equal button that was clicked
  if (num1 != undefined) {
    if ($(event.target).hasClass("+")) {
      operator = "+";
    } else if ($(event.target).hasClass("-")) {
      operator = "-";
    } else if ($(event.target).hasClass("*")) {
      operator = "*";
    } else if ($(event.target).hasClass("/")) {
      operator = "/";
    }
  }
  console.log(operator);
  $("#showNumbers").text(`${num1} ${operator}`);
}

function submitCalculation(event) {
  console.log("in subit calculation function!");

  setOfInfo = {
    num1,
    num2,
    operator,
  };

  $.ajax({
    method: "POST",
    url: "/selectedValues",
    data: setOfInfo,
  }).then(function (res) {
    appendAnswer();
  });
}

function appendAnswer() {
  $.ajax({
    method: "GET",
    url: "/answer",
  }).then(function (res) {
    console.log("got answer page to client, ", res);
    $("#showNumbers").text(
      `${res.at(-1).num1} ${res.at(-1).operator} ${res.at(-1).num2} = ${
        res.at(-1).answer
      }`
    );

    $("#pastCalculations").empty();

    for (let cycle of res) {
      $("#pastCalculations").append(
        `<div>${cycle.num1} ${cycle.operator} ${cycle.num2} = ${cycle.answer}</div>`
      );
    }
  });
}
