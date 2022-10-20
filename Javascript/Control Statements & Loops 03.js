// The (if) statement executes a statement if a specified condition is truthy.
// If the condition is falsy, (else) statement can be executed.

//if-else condition
let weather = "rain";

if (weather === "rain") {
  console.log("It's raining");
} else {
  console.log("You can start walking.");
}

//What's truthy and falsy values in Javascript?

// We have total 5 falsy values in js : 0,""(empty-string),undefined,null,NaN,false

//Ternary Operators in JS

let age = 19;
let check = age > 18 ? console.log(true) : console.log(false);

//Switch Statement in Javascript

let student = "Zack";
switch (student) {
  case "John":
    console.log("My name is John");
    break;
  case "Zack":
    console.log("My name is Zack");
    break;
  default:
    console.log("Value doesn't match.");
    break;
}

//Break : to terminate the code
//Value : you desired value
//key : your variable
