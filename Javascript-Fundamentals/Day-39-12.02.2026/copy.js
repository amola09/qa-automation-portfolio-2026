// Copy:
let arr = [1, 2, 3, [4, 5], 6]

// totally value copy ---> 2. Deep copy
// 1 address, 1 value
let arr2 = structuredClone(arr);

console.log(arr2); //[ 1, 2, 3, [ 4, 5 ], 6 ]

arr2[3].push("JS");

console.log(arr2); //[ 1, 2, 3, [ 4, 5, 'JS' ], 6 ]
console.log(arr); // [ 1, 2, 3, [ 4, 5 ], 6 ]


/* 
Non Primitive:

copy:
1. value:
   1. Deep copy // 1 address, 1 value
   2. Shallow copy // value copy + address copy
2. address/referance --> 1 value, multipal address
*/