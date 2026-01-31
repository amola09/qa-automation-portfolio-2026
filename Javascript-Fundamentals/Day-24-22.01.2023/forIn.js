/* 
for-in loop:
syntax:

for (variable in object) {
    code block to be executed --> key/index
}

object: arrray, objcet

for-in --> key/index retiving
*/
// Program: 1
let arr = ["apple", "banana", "grapes"];
//           0         1         2

console.log(arr.length); // 3
// BOC : 3 iterations

// Program: 2
for (let index in arr) {
    console.log(index); // 0, 1, 2
    console.log(arr[index]); // apple, banana, grapes
}


// for of loop:
// of --> values

// Program: 3
for (let value of arr) {
    console.log(value); // apple, banana, grapes
}