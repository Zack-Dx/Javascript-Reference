class Bankaccount {
  customerName;

  balance = 0;
  // To passs parameters in the class we need to use constructor like this:
  constructor(customerName, balance = 0) {
    this.customerName = customerName;
    this.acccountNumber = Date.now();
    this.balance = balance;
  }
  //We can add methods in the class as per stated below without using the function keyword.
  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

const zackAcc = new Bankaccount("Zack", 1000);
zackAcc.deposit(4000); // This will get saved in the prototype.

console.log(zackAcc);

// BONUS:-

hello(); // Hoisting works with Normal Function

function hello() {
  console.log("Hello");
}

//But for classes this won't work, you need to initialize/declare it first

// We can also make classes same as Function Expressions

//Example: const a = class{ body }

//For the case above ex: const Bankacc = class{ body }
