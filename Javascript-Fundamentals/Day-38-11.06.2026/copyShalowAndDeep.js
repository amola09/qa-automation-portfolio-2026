// // Primitive datatype
// let a = 10;
// console.log(a); // 10

// value copy ==> 1 address, 1 value
// a = 10
// b = 10
// let b = a;
// console.log(b); // 10

// b = 20;
// console.log(b); // 20
// console.log(a); // 10

// Non-primitive datatype:

// let arr1 = [1, 2, 3]
// console.log(arr1); //  [1, 2, 3]

// Address,referance copy
// 2 or multipal address, 1 value

// let arr2 = arr1
// console.log(arr2); // [1, 2, 3]

// // update
// arr2.push("JS");
// console.log(arr2); // [1, 2, 3, "JS"]

// console.log(arr1); // [ 1, 2, 3, 'JS' ]


/* 
# Copy:
1. Primitive datatype:

2. Non-Primitive datatype:

        1.  Address,referance copy (multipal address, 1 value)
        2.  value copy (1 address, 1 value)
            A. Shallow copy [value copy + address copy]
            B. Deep copy [value copy]
*/

// arr1 = [1, 2, 3]

// // want value copy of arr1

// // value copy
// arr2 = arr1.slice(); // arr2 = [1, 2, 3] 
// console.log(arr2); // [1, 2, 3]

// arr2.push("JS");
// console.log(arr2); // [ 1, 2, 3, 'JS' ]

// console.log(arr1); // [ 1, 2, 3 ]


// Copy:
let arr = [1, 2, 3, [4, 5], 6]

//  A. Shallow copy --> value copy + address copy

let arr2 = arr.slice(); // arr =  [1, 2, 3, arr[3], 6]
// 2 address : arr[3], arr2[3]
// 1 value : [4,5]

// console.log(arr2); // [1, 2, 3, [4, 5], 6]
// arr2.push("JS")
// console.log(arr2); // [ 1, 2, 3, [ 4, 5 ], 6, 'JS' ]

// console.log(arr); // [1, 2, 3, [4, 5], 6]

arr2[3].push("TS");
console.log(arr2); // [ 1, 2, 3, [ 4, 5, 'TS' ], 6 ]

console.log(arr); // [ 1, 2, 3, [ 4, 5, 'TS' ], 6 ]