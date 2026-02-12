/* 
some(func):
    Action : checking condition for some el
    Return : Boolean
            
every(func):
    Action : checking condition for every el
    Return : Boolean
*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let output = arr.some(function (ele, ind, arr) {
    // return ele === 1 // true
    return ele === 10 // false
});
// console.log(output);

arr = [1, 1, 1, 1, 1]
let output2 = arr.every(function (ele, ind, arr) {
    return ele === 1 // true
    // return ele === 10 // false
});
console.log(output2);