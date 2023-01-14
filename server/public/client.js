$(document).ready(onReady);

function onReady(){
    console.log("JS and JQ working");
    //listen for a click on a number
    $('.c').on("click", startCalculator);
    
}

let num1;
console.log(num1);
let num2;
let operator;


function startCalculator(event){
    $('.numButton').on("click", assignFirstValue);

}
function assignFirstValue(event){

   // check if num1 has already been selected
   if (num1 === undefined){
   //if not, then assign num1 a value
   if ($(event.target).hasClass('0')){
    num1 = 0;
   }else if ($(event.target).hasClass('1')){
    num1 = 1;
   }else if ($(event.target).hasClass('2')){
    num1 = 2;
   }else if ($(event.target).hasClass('3')){
    num1 = 3;
   }else if ($(event.target).hasClass('4')){
    num1 = 4;
   }else if ($(event.target).hasClass('5')){
    num1 = 5;
   }else if ($(event.target).hasClass('6')){
    num1 = 6;
   }else if ($(event.target).hasClass('7')){
    num1 = 7;
   }else if ($(event.target).hasClass('8')){
    num1 = 8;
   }else if ($(event.target).hasClass('9')){
    num1 = 9;
   }}
   console.log("num 1 is ", num1);

   //listen for an operator click
   $('.operator').on("click", assignOperator);

}

function assignOperator(event){
    //assign operator to equal button that was clicked
    if ($(event.target).hasClass('+')){
        operator = "+";
    }else if ($(event.target).hasClass('-')){
        operator = "-";
    }else if ($(event.target).hasClass('*')){
        operator = "*";
    }else if ($(event.target).hasClass('/')){
        operator = "/";
    }
    console.log(operator);

    //listen for another number button to be clicked
    $('.numButton').on("click", assignSecondValue);
}

function assignSecondValue(event){
        //assign num 2
        if ($(event.target).hasClass('0')){
            num2 = 0;
           }else if ($(event.target).hasClass('1')){
            num2 = 1;
           }else if ($(event.target).hasClass('2')){
            num2 = 2;
           }else if ($(event.target).hasClass('3')){
            num2 = 3;
           }else if ($(event.target).hasClass('4')){
            num2 = 4;
           }else if ($(event.target).hasClass('5')){
            num2 = 5;
           }else if ($(event.target).hasClass('6')){
            num2 = 6;
           }else if ($(event.target).hasClass('7')){
            num2 = 7;
           }else if ($(event.target).hasClass('8')){
            num2 = 8;
           }else if ($(event.target).hasClass('9')){
            num2 = 9;
           }
           console.log("num 2 is ", num2);

           $('.equals').on("click", submitCalculation);
}

function submitCalculation(event){
    console.log("in subit calculation function!");

    //post request to send num1, num2, operator
    //.then
}