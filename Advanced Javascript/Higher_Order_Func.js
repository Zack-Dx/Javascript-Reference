// A function returning a function is an Higher Order Function.

const a = () => {
  return function (name) {
    return `Hello ${name}`;
  };
};

const c = a()("Zack");
console.log(c);
