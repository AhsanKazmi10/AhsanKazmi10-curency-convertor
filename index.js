#! /usr/bin/env node
import inquirer from "inquirer";
const curency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.96,
    INR: 74.97,
    PKR: 280,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your curency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "To",
        message: "Enter to curency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let formAmount = curency[userAnswer.from];
let toAmount = curency[userAnswer.To];
let amount = userAnswer.amount;
let basedAmount = amount / formAmount;
let convertedAmount = basedAmount * toAmount;
console.log(convertedAmount);
