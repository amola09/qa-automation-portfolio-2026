// static properties and methods are those that belong to,
// the class itself rather than to instances of the class.
// They can be accessed without creating an instance of the class.   
class classOne {
    static key1 = 10;
    static key2 = "JS";
    static key3() {
        console.log("I am static method")
    };
};

// Retriving static properties and methods:
console.log(classOne.key1); // undefined
console.log(classOne.key2); // JS
classOne.key3(); // I am static method