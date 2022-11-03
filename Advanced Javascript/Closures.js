// Closures : Function returning with it's lexical environment.

//Inner Functions can access params and variables of it's parent function.

//Example as per lexical scoping:
// const outerFun =(a)=>{
//     let b =10;
//     const innerFun=()=>{

//         let sum = a + b;
//         console.log(`The output is ${sum}`)
//     }
//    innerFun()
// }

// outerFun(5);
// Example with Pure Closure.

const outerFun = (a) => {
  let b = 10;
  const innerFun = () => {
    let sum = a + b;
    console.log(`The output is ${sum}`);
  };
  return innerFun; // now returning a function.
};

let a = outerFun(5);
console.log(a);
a(); //Storing the returned func and calling it.

// And we can see the returned function still has the values stored in the closures.

// Basically, we are calling outer function even without it's scope.

// Parent functions can't access inner functions variables.
