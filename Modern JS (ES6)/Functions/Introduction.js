// let = blocked scoped variable
//const - constant varibale (no further changes allowed.)

//Template Literals : `${variable}`

//Default Parameters

// Default function parameters allow named parameters to be
// initialized with default values if no value or undefined is passed.

function mult(a, b = 5) {
  return a * b;
} // (b)here is a default parameter.

console.log(mult(3));

//Fat-Arrow Functions in Javascript

const result = (maths, physics) => {
  return (total = maths + physics);
};

console.log(result(70, 70));

//Return keyword can be avoided if the function is a one-line function.

//Function Expressions is nothing just declaring a function and storing it into a variable.

const a = function () {
  console.log("FUNCTION EXPRESSION");
};

a();
