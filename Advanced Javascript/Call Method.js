// Object can call each other's methods


// obj1.method.call(obj2)


//obj1 = who's method;
//obj2(object where method needs to be used)

const obj1 ={
    name:'Zack',
    closely(){
        console.log(`HEllo`)
    }
}


const obj2 ={
    name:"John"
}

obj1.closely.call(obj2)


let obj = {
    "a": "apple",
    "b": "banana",
    "c": "cactus"
  }



 for ( key in obj) {
    console.log(obj[key]);
  }
