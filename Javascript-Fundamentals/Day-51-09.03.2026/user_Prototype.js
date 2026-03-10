/* 
#  prototype use:
    1. Inheritance
    2. CURD properties on the class level prototype 

*/

/* {}.b --> b value
{}.b = 10 */
class classOne {
    // static a = 10;
    a = 10;
    // prototype: object
}
// instance ---> instance level
// class level
console.log(classOne.a); // undefined

console.log(classOne);
// console.log(classOne.prototype);
classOne.prototype.b = "I am custom";
console.log(classOne.prototype);

// Instance level
let arr = [1, 2];
// Array --> class level
console.log(Object.getPrototypeOf(arr));
console.log(Array.prototype);

// arr.push("Hi"); // inheritance
// console.log(arr.push("Hi"));

// Use:

// CURD :
Array.prototype.push = (para) => {
    // return "Hi"
    console.log("I am custom push method", para)
};

arr.push("Hi JS"); // inheritance
console.log(arr.push("Hi JS"));
console.log(arr);