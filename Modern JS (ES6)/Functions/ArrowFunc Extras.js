//One liner arrow function:
const a = () => "Hello World";
console.log(a());

//Arrow Function don't have context basically 'this' keyword (context)

//Normal Function has context.

// `This` keyword is used in objects to get the object's property.

// `This` inside an object is an object itself.

const shop = {
  purchase: () => {
    console.log(this); // This will context towards the global object thats Window as arrow functions don't have contexts.
  },
};

shop.purchase();
