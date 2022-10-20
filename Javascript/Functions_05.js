// A JavaScript function is a block of code designed to perform a particular task.

//Before using we need to Define/Declare/Statement the function.

function sum(a, b) {
  let sum = a + b;
  return sum;
} //Declared

//Calling a Function: func_name(parameters)

sum(6, 6); // 12

// Function Parameter vs Function Arguments
// Function parameters are the names listed in the function's definition.
// Function arguments are the real values passed to the function.

//  Function expressions
// "Function expressions simply means
// create a function and put it into the variable "

let result = sum(5, 5);
console.log(result);

// Return Keyword
// When JavaScript reaches a return statement,
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller".

// Anonymous Function

// A function expression is similar to and has the same syntax
// as a function declaration One can define "named"
// function expressions (where the name of the expression might
// be used in the call stack for example)
// or "anonymous" function expressions.

//You can call it by storing it in a variable.

let func = function (a, b) {
  return a * b;
};

console.log(func(2, 3));
