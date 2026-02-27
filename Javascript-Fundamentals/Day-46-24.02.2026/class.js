// static class structure
class classOne {
    key = "Ts";
    methodOne = function () {
        console.log("I am method")
    }
}

let obj = new classOne();
console.log(obj);
let obj2 = new classOne();
console.log(obj2);
let obj3 = new classOne();
console.log(obj3);


// correlate with function with parameter:
// function(para)

// To class can send parameters with the help of constructor
// constructor also called as a constructor function

class classTwo {
    constructor(para) {
        console.log(para); // Hi I am Argu
    };
}

let obj4 = new classTwo("Hi I am Argument"); // --> arguments receiving to the classTwo constructor as a parameter (reciving to the classtwo)
let obj5 = new classTwo("Hi I am Argu2"); // Hi I am Argu2

// Define class properties with constructor
class classThree {
    // let, const, var cant use for property define in the class
  key // --> need to define
    constructor(para) {
        console.log(para); // Hi I am Argu
        key = para; // ReferenceError: key is not defined
        // key new/ no referance
    }

}

let obj6 = new classThree("Hi I am Argu");

console.log(obj6)