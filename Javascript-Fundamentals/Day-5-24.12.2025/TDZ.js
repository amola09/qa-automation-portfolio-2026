// 5. Temporal Dead Zone (TDZ)

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// var declared its variable globally


// console.log(aa); // ReferenceError: Cannot access 'aa' before initialization
let aa = 10;
console.log(aa); // 10

// console.log(aaa); // ReferenceError: Cannot access 'aaa' before initialization
const aaa = 10;
console.log(aaa); // 10


// script --> memory creation phase (Heap)


/* {

    {



    }

} */

// 6.