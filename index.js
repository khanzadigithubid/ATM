#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 1234;
console.log("Welcome to Khanzadi's ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin Code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is Correct, Login Successfully!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an operation",
            choices: ["Withdraw Amount", "Check Balance", "FastCash"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Withdraw:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Withdraw Successfully`);
            console.log(`Your Remaining Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to Check Balance:",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} Check Balance Successfully`);
            console.log(`Your account Balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "FastCash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Select the amount to FastCash:",
                choices: [5000, 10000, 15000, 20000]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} FastCash Successfully`);
            console.log(`Your account Balance is: ${myBalance}`);
        }
    }
    else {
        console.log("Pin is Incorrect, Try Again!");
    }
}
;
