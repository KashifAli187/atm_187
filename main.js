#! /usr/bin/env node 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 10000; //Dollar
// for seting pin code in a variable 
var myPin = 1234;
//to ask question
// to add multiple quesions using square bracket
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Enter your pin :",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!");
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAns);
    //let operationAns:any
    if (operationAns.operation === "withdraw") {
        var amountans = await inquirer_1.default.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is : " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is : " + myBalance);
    }
}
else {
    console.log("Incorrect pin code!");
}
