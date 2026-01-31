// For Object:

let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// // for in loop:
// // in --> keys retrive

for (let key in obj) {
    console.log(key); // name, age, city
    console.log(obj[key]); // John, 30, New York
    // console.log(obj.key); // undefined
}

// // Think: Obj retrive: . & []
// Only bracket notation work with variables in the loop


// for of loop:

// of --> value retrive

for (let value of obj) {
    console.log(value); // John, 30, New York
}                                          // TypeError: obj is not iterable
// Note: object is not iterable

// Make object iteratable:
// Object iteratable methods:

// 1. Object.keys(): --> return keys array
// Action: collecting object keys in an array
// Returned array can be iterated using for of loop

let keys = Object.keys(obj);
console.log(keys); // [ 'name', 'age', 'city' ]

// 2. Object.values(): --> return values array
// Action: collecting object values in an array         
// Returned array can be iterated using for of loop

let values = Object.values(obj);
console.log(values); // [ 'John', 30, 'New York' ]

// 3. Object.entries(): --> return entries array
// Action: collecting object entries in an array of arrays
// Returned array can be iterated using for of loop

let entries = Object.entries(obj);
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]


// for-of loop: object not iteratable
// But, arrray is iteratable
// Object methods return arrray (iteratable object)

// [ 'John', 30, 'New York' ]

for (let value of values) {
    console.log(value); // John, 30, New York
};

// old vs new
for (let i = 0; i < values.length; i++) {
    // console.log(values[i]); // John, 30, New York
}