// this

/* 
Q. what is 'this'?
   - js reserved keyword or variable
   - 'this' always containing dynamic value which is object
   - 'this' is a object (Dynamic object)
   - which object ?
    - containing dynamic value/object according to its scope:
      1. In script & functions : this ==> window 
      2. In method  : this ==> owner object
          Depends on function type and its nested structure
      3. In constructor : this ==> new instance.
*/

let Obj = 10
// let this = 10; // function, class, for, if, new

// What is this ?
// this is a variable who store the values

// Which value stored ?
// Dynamic value stored --> value datatType --> object
// this === object
// this.key
// this.key = value --> can add values in this object

// script scope: this have window object value
console.log(this); // {}


// Example for value retrive and update in funtion
let objj = {
    key: 10
}
objj.key
objj.key2 = 100
console.log(objj); // { key: 10, key2: 100 }

// in calss constructor scope: this have new instance value
class classThree {
    constructor(para) {
        console.log(para); // Hi I am Argu
        this.key = para;
        // value adding in this object (obj6)
    }
}

let obj6 = new classThree("Hi I am Argu");
console.log(obj6)