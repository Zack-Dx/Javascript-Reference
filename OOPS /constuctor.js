//Try to name your function in cap as just to know the function is a Contructor Function and we are trying to make an object of it.

//Constructor Function:
function Bankaccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
  this.deposit = function (amount) {
    this.balance += amount;
  };

  this.withdraw = (amount) => {
    this.balance -= amount;
  };
}

//Now to make an object with this:

const Zack = new Bankaccount("Zack", 1000);
console.log(Zack);

const John = new Bankaccount("John");
console.log(John);

//Functions in classes are called as Methods.
//Variables in classes are called as Properties.

//Calling a Method:

John.deposit(510); //Called and Parameter passed.
Zack.withdraw(500);

//Arrays and Objects both are constructors.

// We get .map, .filter and etc many more methods just because of the Array Contructor in javascript.

//To check Array's prototype  = Array.protoype
