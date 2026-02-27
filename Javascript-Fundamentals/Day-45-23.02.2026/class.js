/* OOPS:   class, object  */

// object Literal : 
let obj = {
    key1: "JS",
    key2: "TS",
    key3: function () {
        console.log("I am key3 Method");
    }
}


/* 
class synatx:
class classOne {


}
*/

class classOne {
    // properties
    key1 = "JS";
    key2 = "TS";
    // methods
    key3() {
        console.log("I am key3 Method");
    }
}
console.log(typeof classOne); // function
console.log(classOne); // [class classOne]
// Not able to call properties/methods on the class level:
//classOne.key3(); // TypeError: classOne.key3 is not a function


/* 
object creation from class:

new className()
*/

// instance level:
let obj2 = new classOne();
console.log(obj2); // classOne { key1: 'JS', key2: 'TS' }
obj2.key3(); // I am key3 Method

// calling properties on the instance level:
console.log(obj2.key2); // TS


//---------------------------------

// array declared by the literal type :
// instance level:
let arr = [1, 2, 3];

// Array.from();
// Array: class ---> push() present inside the Array class
arr.push(5);

// keys is a Object class method 
Object.keys();

// Real object/ instance of Object class:
let obj3 = {

}

// obj3 --> instance of Object class and hasOwnProperty() is a method of Object class
obj3.hasOwnProperty();