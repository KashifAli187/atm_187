#! /usr/bin/env node 
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";

let myBalance = 10000; //Dollar
// for seting pin code in a variable 
let myPin = 1234;
//to ask question
// to add multiple quesions using square bracket
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin :",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin){
    console.log("Correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log (operationAns);
        //let operationAns:any
    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("your remaining balance is : " +myBalance)
    }else if (operationAns.operation === "check balance"){
        console.log("your balance is : " +myBalance)
    }
}else {
    console.log("Incorrect pin code!");
}