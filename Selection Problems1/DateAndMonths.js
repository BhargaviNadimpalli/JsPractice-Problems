readline = require("readline-sync");
let date = readline.question("Enter the Date : ");

let month = readline.question("Enter the Year : ");

if ((month <= 6 && date <= 20) && (month >= 3 && month <= 6) && (date < 31))
{
    console.log("The date is true.");
}
else
{
    console.log("The date is false.");
}