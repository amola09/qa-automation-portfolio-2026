/* 
map() ---> advance object
set() ---> advance array

*/


// only strore unique values:
let setObj = new Set([1, 2, "Hi", 1, 2]);
// []
// console.log(setObj);// Set(3) { 1, 2, 'Hi' } //  Set(3) [ 1, 2, 'Hi' ]

// size --> length of set
// console.log(setObj.size); // 3


for (let value of setObj) {
    console.log(value);
}

// Methods:

// console.log(setObj.keys()); // [Set Iterator] { 1, 2, 'Hi' }
// console.log(setObj.values()); // [Set Iterator] { 1, 2, 'Hi' }

// console.log(setObj.entries());
// [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 'Hi', 'Hi' ] }

// CURD:
// add:

let setObj2 = new Set();
console.log(setObj2); // Set(0) {}

console.log(setObj2.add("JS")); // Set(1) { 'JS' }
// console.log(setObj2); //  Set(1) { 'JS' }

// console.log(setObj2.add("JS", "TS"));
console.log(setObj2.add("TS")); // Set(2) { 'JS', 'TS' }

//  has(), delete(), clear(),

console.log(setObj2.has("JS")); // true
console.log(setObj2.has("js")); // false

console.log(setObj2.delete("JS")); // true
console.log(setObj2.delete("js")); // false
console.log(setObj2); // Set(1) { 'TS' }


console.log(setObj2.clear());
console.log(setObj2); // Set(0) {}


/* 
Deloitte QA Automation pune 5+ yrs exp:


let name = ["Ram", "Shyam", "Hari", "Ram", "Mira"];
let marks = [-5, 6, 3, -2, 0];
sort -> [6, 3, 0, -2, -5]; --> sort name array based on marks array     

*/