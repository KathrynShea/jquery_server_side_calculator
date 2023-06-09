$(document).ready(onReady);

function onReady() {
  //called this function so that all history is listed when we refresh the page.
  appendAnswer();

  //listen for a click on a number
  $(".c").on("click", startCalculator);
  //listen for click on equals button
  $(".equals").on("click", submitCalculation);
  //click listener for numbers
  $(".numButton").on("click", assignValue);
  $(".operator").on("click", assignOperator);
  $(".decimal").on("click", addDecimal);

  $("#showNumbers").text(0);
}

// initial variables
let num1;
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
    num1 = $(event.target).data("num");
    console.log(typeof num1, num1);
    $("#showNumbers").text(num1);
    
  } else if (num1 !== undefined && operator === undefined) {
    //if num1 is already assigned a value and the operator has not been selected, keep adding the number to num1
    num1 += `${$(event.target).data("num")}`;
    $("#showNumbers").text(num1);
    
    //if the operator has been selected, then move on to updating num2
  } else if (operator !== undefined) {
    //if num2 has not yet been selected, then update the value to the selected button
    if (num2 === undefined) {
      num2 = $(event.target).data("num");
     //console.log(typeof num1, num1);
     $("#showNumbers").text(`${num1} ${operator} ${num2}`);
      
      //but if num2 has already been selected, then keep adding to num2
    } else if (num2 !== undefined){
      num2 += `${$(event.target).data("num")}`;
      $("#showNumbers").text(`${num1} ${operator} ${num2}`);
    }
  }
//   //listen for an operator click
//   $(".operator").on("click", assignOperator);
}

function assignOperator(event) {
  //assign operator to equal button that was clicked
  if (num1 != undefined) {

    //clear num2
    num2 = undefined;
    
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
  //console.log(operator);

  //udpate box to represent the selected operator
  $("#showNumbers").text(`${num1} ${operator}`);
}

function submitCalculation(event) {
  console.log("in subit calculation function!");

  //assign variables into an onject
  setOfInfo = {
    num1,
    num2,
    operator,
  };
  
  //send object to server
  $.ajax({
    method: "POST",
    url: "/selectedValues",
    data: setOfInfo,
  }).then(function (res) {
    appendAnswer();
  });
}

function appendAnswer() {
  //get the total calculation back and append to DOM
  $.ajax({
    method: "GET",
    url: "/answer",
  }).then(function (res) {
    console.log("got answer page to client, ", res);
    let newVar = ((res.at(-1).answer));
    console.log("newVar is" , newVar);
    $("#showNumbers").text(
      `${res.at(-1).num1} ${res.at(-1).operator} ${res.at(-1).num2} = ${
        (res.at(-1).answer)}
      `
    );

    $("#pastCalculations").empty();
  
    //loop through total history array and append all previous calculations to DOM
    for (let cycle of res) {
      $("#pastCalculations").append(
        `<div>${cycle.num1} ${cycle.operator} ${cycle.num2} = ${(cycle.answer)}</div>`
      );
    }
  });
}

function addDecimal(){
  console.log("made it to addDecimal function");
  if(operator === undefined){
    //add decimal to num1
    num1 += ".";
    $("#showNumbers").text(num1);
  }else{
    //add decimal to num2
    num2 += ".";
    $("#showNumbers").text(`${num1} ${operator} ${num2}`);
  }
}
