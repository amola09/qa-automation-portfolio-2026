// Object: Inbuild methods

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// console.log(obj); // { name: 'John', age: 30, city: 'New York' }

// let keys = Object.keys(obj);
// console.log(keys)  // [ 'name', 'age', 'city' ]
/* 
Action: Finding key of object
Return: Array
*/

// let values = Object.values(obj);
// console.log(values) // [ 'John', 30, 'New York' ]
/* 
Action: Finding values of object
Return: Array
*/

// let entries = Object.entries(obj);
// console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
/* 
Action: Finding key values of object
Return: 2D Array
*/

// hasOwnProperty("PropertyName"):
// console.log(obj.hasOwnProperty("age")); // true
// console.log(obj.hasOwnProperty("MobNo"));  // false
/* 
Action: Checking arug(Property) present in the object
Return: boolean
*/


/* 
isExtensible: 
Action: Checking whether new properties can be added to object
Return: boolean
*/
console.log(Object.isExtensible(obj)); // true

// can add new properties to object
obj.country = "USA";
console.log(obj); // { name: 'John', age: 30, city: 'New York', country: 'USA' }

/* 
preventExtensions:
Action: Preventing new properties to be added to object 
Return: boolean
*/
console.log(Object.isExtensible(obj)); // true
Object.preventExtensions(obj);
console.log(Object.isExtensible(obj)); // false
obj.Mycountry = "USAA";
console.log(obj); // { name: 'John', age: 30, city: 'New York', country: 'USA' }


/* 
isSealed: 
Action: Checking whether new properties can be added & existing properties can be deleted from object   
Return: boolean
*/
console.log(Object.isSealed(obj)); // false

Object.seal(obj);
delete obj.Mycountry
console.log(obj);
/* 
seal:
Action: Preventing new properties to be added & existing properties to be deleted from object
Return: boolean
*/

/* 
freeze:
Action: Preventing new properties to be added & existing properties to be deleted & existing properties to be updated from object
Return: boolean 
*/
console.log(Object.isFrozen(obj));
Object.freeze(obj);
obj.country = "INDIA"; // update
console.log(obj);
console.log(Object.isFrozen(obj));