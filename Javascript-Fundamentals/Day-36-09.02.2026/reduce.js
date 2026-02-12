/* 
reduce(func(acc,el,...), initial) –
    Action : calculate a single value over the array by calling func for 	each element and passing an intermediate result between the calls.
    Return : single value (depends on function defination)
*/

let arr = [1, 2, 3, 4, 5]

// let output = arr.reduce(function (preVal, ele, ind, arr) {
//     // console.log(preVal) // 0
//     return preVal + ele // 15
// }, 0);

let output = arr.reduce(function (preVal, ele, ind, arr) {
    // console.log(preVal) // 0
    return preVal + ele // 25
}, 10);

console.log(output)