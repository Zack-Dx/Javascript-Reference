// To override the methods of the parent class.

class Exmployee {
  constructor(name) {
    this.name = name;
    console.log(`${this.name}`);
  }

  requestleaves(days) {
    console.log(`request is fullfilled for ${days} days.(Auto Approved)`);
  }
}

class Programmer extends Exmployee {
  requestleaves(n) {
    super.requestleaves(4); // Super Keyword.
    // console.log(`Leave is granted for ${n} days.`); //Method Overriding
  }
}

let p = new Programmer("Zack"); // New Object made from class.(Here Zack is passed to parent constructor through child/derieved class.)
p.requestleaves(12);

//Super keyword is used to call parent class method in order to reflect changes.
