const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 5000;

let answer;

app.use(express.static('server/public'));
app.use(express.urlencoded({extended:true}));


//requests
app.post("/selectedValues", function (req,res){
    console.log(req.body.num1);
    console.log(req.body.num2);
    console.log(req.body.operator);
    

    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let operator = req.body.operator;

    doCalculation(num1, num2, operator);

    res.sendStatus(200);

})

function doCalculation(num1, num2, operator){
console.log("in do calculation function");

if (operator === "+"){
    answer = Number(num1) + Number(num2);
}else if (operator === "-"){
    answer = Number(num1) - Number(num2);
    
}else if (operator === "*"){
    answer = Number(num1) * Number(num2);
    
}else if (operator === "/"){
    answer = Number(num1) / Number(num2);
    
}

console.log(answer);


}


app.listen(PORT, function (){
    console.log("listening on port ", PORT);
});