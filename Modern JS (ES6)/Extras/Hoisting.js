//                                  Hoisting

// Hositing in Javascript is a mechanism where `variables` and `functions` declarations are moved to the top of their scope before the code execution.

//                       Functions Hoisting in Javascript:

sum(5, 5);
function sum(a, b) {
  add = a + b;
  console.log(add);
}

// POV for browser for the example above:

function sum(a,b){
    add = a+b
    console.log(add)
}

sum (5,5) // As because function declaration is scoped at top and then execution phase.

// When declaration part is scoped at the top by the browser before executing i.e hoisting.

// Hoisting just works on functions and variables declaration (Varibales are undefined by default after creation phase.)

// Exceptions:

// 1. Hoisting won't work for Function Expressions (basically function inside a variable.)

// 2. functions inside (parenthesis) hoisting won't work.

// 3. Hoisting won't work for Arrow Functions.

//                         Variable Hoisting in Javascript:

console.log(a); // (Undefined)
var a = 10;

// Hoisting moves variable to the top scope in the creation phase before the execution phase of the code and it's value is set to undefined.

//Exceptions :

// 1. Variable Hoisting doesn't works for let and const.