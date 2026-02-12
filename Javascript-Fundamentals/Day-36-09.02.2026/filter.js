/* 
 filter(func) –     
    Action : filter elements through the function
    Return : New filtered array 

*/

let arr = [1, 2, 3, 4, 5]

// let output = arr.filter(function (ele, ind, arr) {
//     // console.log(ele)
//     // condition  
//     // []
//     // return ele // [ 1, 2, 3, 4, 5 ]
//     return ele > 3 // [ 4, 5 ]
// });

let output = arr.filter((ele, ind, arr) => ele > 3); // [ 4, 5 ]
console.log(output)