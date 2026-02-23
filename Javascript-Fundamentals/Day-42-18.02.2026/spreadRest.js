// spread_rest with destructuring:
// ...

let arr = [1, 2, 3];

// let [a, b, c] = arr;
// sperate(spread)   = object

// RHS = spread

// console.log(a); // 1

// [...arr2] = arr;

// LHS ---> rest
// console.log(arr2); // [ 1, 2, 3 ] 

// partial rest:

[p, q, ...arr2] = arr;

console.log(p); // 1
console.log(arr2); // [3]


let arr3 = [1, 2, 3]
// push

let arr4 = ["JS", "TS", ...arr3]

console.log(arr4); //[ 'JS', 'TS', 1, 2, 3 ]

let [k, m, ...l] = arr4

console.log(k); // JS
console.log(l); // [1, 2, 3 ]

// spread creating shallow copy