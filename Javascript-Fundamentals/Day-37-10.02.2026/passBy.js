
// // Primitive datatype
// let a = 10;
// console.log(a); // 10;

// function update(para) {
//     // para == a
//     // a = 10 ---> seperate
//     // para = 10 ---> seperate
//     console.log("update function called", para);
//     para = 20;
//     console.log(para); // 20
// };
// update(a);
// // copy by value
// // pass by value

// console.log(a); // 10

// Non-Primitive datatype
let arr = [1, 2, 3];
console.log(arr); //[ 1, 2, 3 ]

function update(para) {
    // para == arr
    // 1 value --> [1, 2, 3]
    // 2 address --> arr, para
    console.log("update function called", para); //[ 1, 2, 3 ]
    para.push("JS");
    console.log(para); //[ 1, 2, 3, "JS" ]
};
update(arr);
// pass by address 
// copy by address 

console.log(arr); // [ 1, 2, 3, 'JS' ]

/* 
Non-Primitive datatype: dells with addresses
Primitive datatype: dells with values
*/