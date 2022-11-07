// This is a way to inherit Parent Object properties to a Child Object.

const father = {
  height: "Tall",
  IQ: "High",
};

// To use Father's property in child we need to inherit it.

const child = {
  height: "Short",
};

// To inherit we need to use (__proto__)

child.__proto__ = father; // Properties Inherited

console.log(child.IQ);
