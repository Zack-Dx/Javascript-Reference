// The Scope Chain is used to resolve the value of the Variable names in Javascript.

// In Javascript, Scope Chain is lexically defined, which means we can identify the scope chain by looking at the code.

// In Javascript scope is only created for functions.

// At the top of the scope chain is the Global Scope, which is the Window Object in the browser.

// Scope Chaining : Means to check the scope from inner to outer if the varibale is present or not.

// Lexical Scoping : A function that is lexically within another function to the scope of the outer function.

let a = "Hello "; // Global Scope

function first() {
  let b = "How are you "; // Parent Function
  second();

  function second() {
    let c = "Zack?";
    console.log(a + b + c); // Inner/Child Function
    three();
  }
}
first();
function three() {
  let d = "Amazing";
  console.log(a + b + c + d); // This will result in an error because b & d are not in the function's scope.
}

// NOTES:

// Lexical Scoping says that inner function/child function can access the variables inside the parent function and Global Scope.

//Each and Every Function can access the Global Scope.

// Each and every function has it's own context/ environment if it fails to find variables in it's own environment then it can only check Global Scope nothing else.

//Parent Functions can't access inner function variables.
