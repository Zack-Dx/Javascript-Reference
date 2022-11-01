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

//Callbacks in a function: (Passing a function as an argument)

function textformatter(word, func) {
  return typeof func === "function" ? func(word) : word.toUpperCase();
}

//One Liner Callback Function:
const check = textformatter(
  "zack",
  (zack) => zack.charAt(0).toUpperCase() + zack.slice(1)
);

console.log(check);

//IIFE (Immediately invoked function expression.)

(function setup() {
  console.log("Setup Done");
})(); // Here the function will called itself.

//Good Practices to follow:

// Use verbs to declare names = get,show,calc

//One function = One action (Action as per name)

//Function name should be descriptive (Don't use a,b,c or such to declare functions.)

// What function takes in () is Parameters and what we pass after calling the function in () is Arguments.
