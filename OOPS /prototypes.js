//Prototypes are required to prevent extra usage of memory.
//Whenever a function is declared javascript by default adds a property named 'Prototype'
//Prototype is nothing but an empty object.

function Bankaccount(customerName, balance = 0) {
  this.customerName = customerName;
  this.accountNumber = Date.now();
  this.balance = balance;
}

const Binodacc = new Bankaccount("BINOD", 2000);

const Johnacc = new Bankaccount("John", 1000);

//Prototype Chain
Bankaccount.prototype.deposit = function (amount) {
  this.balance += amount;
};
Johnacc.deposit(3000);
console.log(Johnacc);

Bankaccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

//How deposit function will get executed?
//Firstly, Javascript will check if there is any method or such in the object. If it fails to find the object then it will check the constructors prototype through which the object has been made and it'll get executed.
