#!/usr/bin/env node
import inquirer from "inquirer";
let mybalance = 100000;
let myPin = 3012;

let pinAnswer = await inquirer.prompt
(
    [
        {
            type: "number",
            name: "pin",
            message: "Enter your pin",
        },
    ]
);
if (pinAnswer.pin === myPin) 
     {
        console.log("Welcome");
            let operationAnswer = await inquirer.prompt
                (
                    [
                        {
                            name: "operation",
                            type: "list",
                            message: "Choose operation",
                            choices: ["Withdraw", "Deposit", "Check Balance"],
                        },
                    ]
                );
                if (operationAnswer.operation === "Withdraw")
                {
                    let withdrawAnswer = await inquirer.prompt
                        (
                            [
                                {
                                    type: "number",
                                    name: "withdraw",
                                    message: "Enter amount to withdraw",
                                },
                            ]
                        );
                        if (withdrawAnswer.withdraw <= mybalance)
                        {
                            mybalance -= withdrawAnswer.withdraw;
                            console.log(`Your balance is ${mybalance}`);
                        }
                        else
                        {
                            console.log("Insufficient balance");
                        }
                }
                else if (operationAnswer.operation === "Deposit")
                {
                    let depositAnswer = await inquirer.prompt
                        (
                            [
                                {
                                    type: "number",
                                    name: "deposit",
                                    message: "Enter amount to deposit",
                                },
                            ]
                        );
                        mybalance += depositAnswer.deposit;
                        console.log(`Your balance is ${mybalance}`);
                }
                else
                {
                    console.log(`Your balance is ${mybalance}`);
                }
}               

else 
{
  console.log("Invalid Pin");
}
