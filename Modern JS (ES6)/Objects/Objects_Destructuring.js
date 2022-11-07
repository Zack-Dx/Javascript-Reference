// We can unpack properties from Object using Object destructing.

const obj1 = {
  name: "Zack",
  qualification: "Javascript Developer",

  hobby: {
    love: "exploring javscript",
  },
};

let { name: myname, qualification, hobby } = obj1;
//To rename name use `name:your_name`

console.log(
  `My name is ${myname} and my qualification is a ${qualification} and my hobby is ${hobby.love}`
);
