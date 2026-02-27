/*

objName.methodName()
functionName.call(thisValue, arg1, arg2, ...)

*/

// function abc() { }
// console.log(typeof abc); // function

let obj1 = {
    name1: "JS",
    method1: function () {
        console.log("I am obj1", this.name1); // I am obj1 JS
    }
}

 obj1.method1();

let obj2 = {
    name1: "TS",
    method1: function () {
        console.log("I am obj2", this.name1); // I am obj2 TS
    }
}

obj2.method1(); // I am obj2 TS

obj1.method1(); //  obj1.method1();
obj1.method1.call(obj2); // I am obj1 TS

let output = obj1.method1.bind(obj2);
console.log(output)
// return : function/method 
// output(); // I am obj1 TS

obj1.method1.apply(obj2); // I am obj1 TS



console.log("---------------------")

let objj1 = {
    name1 : "Amol",
    method : function(){
          console.log("Hi my Name is:",this.name1)
    }
}
objj1.method()

let objj2 = {
    name1: "Rahul",
    method: function(){
        console.log("Hi my Name is:",this.name1)
    }
}
objj2.method()

// call ,bind, apply

// call
objj2.method.call(objj1) // Amol instead of Rahul
//bind
let op = objj2.method.bind(objj1)
console.log(op)  // function
op()     // Amol instead of Rahul
// apply
objj2.method.apply(objj1) // Amol instead of Rahul

