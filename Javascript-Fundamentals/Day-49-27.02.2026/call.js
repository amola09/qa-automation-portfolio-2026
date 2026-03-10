/* 

OOPS:
     1. Inheritance --> 
         1. prototype
         2. class --> extends
     
*/

class classOne {
    // class level property
    key1 = 10
}

let obj1 = new classOne();
console.log(obj1.key1); // 10
// Instance level property
obj1.key3 = "TS";
console.log(obj1.key3); // TS


let obj3 = {
    // Instance level property
    name1: "Hi"
}
console.log(obj3.name1); // Hi
// class level method
console.log(obj3.hasOwnProperty("name1")); // true

// Array:
/* 
class level method
push(), pop()

[]
"String".trim()

Why ? How ?
*/


// class inheritance
// extends
class classTwo extends classOne {
    key2 = "JS";
}

let obj2 = new classTwo()
console.log(obj2); // classTwo { key2: 'JS' }
// after extend:
// classTwo { key1: 10, key2: 'JS' }