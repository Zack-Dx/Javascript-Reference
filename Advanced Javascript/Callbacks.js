// Passing Functions as an argument is callbacks.

// A callback function is executed after another function is executed (reason behind callbacks.)

// Callback means `Call me Back`
const funA = () => {
  setTimeout(() => {
    console.log(`Hello 1`);
    funB(); // Callback just an example.
  }, 3000);
};

const funB = () => {
  console.log(`Welcome fun B`);
};

funA();

// Best exmaple to unuderstand this:

const funcOne = (wannapass, name) => {
  console.log(`Hello1 ${name}`);
  wannapass();
};

const funcTwo = () => {
  console.log(`Hello2`);
};

funcOne(funcTwo, "Zack");
