let arr = [1, 2, 4, true, "Hi"];
let a = "JS"

// isArray:
console.log(Array.isArray(arr)) // true
console.log(Array.isArray(a)) // false


// Array is an iteratable
// for In
// for of


// for(let i=0; i<4; i++){}

// for(let ind/val in/of arr){
//     // ind
//     // val
// }

// forEach()


// callBack
// function fun() {
// }

// aa(); // function calling


// arr.forEach(fun)
// callBack --> fun
 

/* 
forEach(func):
    Action : Iterate/operation on the each element
    Return : undefined
*/


let arr1 = [1, 2, 4, true, "Hi"];
arr1.forEach(function (ele, index, arr) {
    /* 
    ele: element/value
    index: array index
    arr: array
    */

    // console.log(ele) // 1, 2, 4, true, "hi"
    // console.log(index) // 0, 1, 2, 3, 4
    // console.log(arr) // [ 1, 2, 4, true, 'Hi' ]
})

function callBackFun(ele, index, arr) {
    /* 
    ele: element/value
    index: array index
    arr: array
    */

    console.log(ele) // 1, 2, 4, true, "hi"
    console.log(index) // 0, 1, 2, 3, 4
    console.log(arr) // [ 1, 2, 4, true, 'Hi' ]
}
    
arr.forEach(callBackFun)