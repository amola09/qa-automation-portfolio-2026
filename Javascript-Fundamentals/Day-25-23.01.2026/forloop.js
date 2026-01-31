// for loop:

// Program: 1
for (let i = 0; i < 5; i++) { // 1, 2, 3, 4, 5
    console.log(i); // 0, 1, 2, 3, 4 
}

// Program: 2
for (let i = 0; i <= 5; i++) { // 1, 2, 3, 4, 5, 6
    // 5 <= 5 --> true
    // < || =
    // 5 < 5 --> false
    // 5 == 5 --> true
    // false || true ---> true
    console.log(i); // 0, 1, 2, 3, 4, 5 
};

// Program: 3
// for (let i = 0; i < 5; i++) { // 1, 2, 3, 4, 5
//     console.log(i); // 0, 1, 2, 3, 4 
// }
// console.log(i); // ReferenceError: i is not defined

// let : Global, function & block scope

// i++ => i = i + 1 --> increment by 1
// Program: 4
for (var i = 0; i < 5; i++) { // 1, 2, 3, 4, 5
    // console.log(i); // 0, 1, 2, 3, 4 
}
console.log(i); // 5

// var : Global & function scope

// -----------------------------
// Reverse for loop:

// 1-- => i = i - 1 --> decrement by 1

// Program: 5
for (let i = 5; i > 0; i--) { // 4, 3, 2, 1, 0
    console.log(i); // 5, 4, 3, 2, 1
}
// 0, 1, 2, 3, 4

// Logical interview question:


// Program: 5
// reverse the given string using for loop

let str = "JavaScript";
//         0123456789
// length === last index + 1
// length - 1 === last index

// console.log(str.length); // 10

// console.log(str[2]); // v

let reversedStr = "";

// for (let i = 0; i < 10; i++) { // 
for (let i = 0; i < str.length; i++) { // 
    // console.log(str[i]); 
    reversedStr = str[i] + reversedStr;
}
console.log(reversedStr); // tpircSavaJ


// Using reverse for loop:
// 10 start
// 0  End
for (let i = str.length; i >= 0; i--) { // 
    // console.log(str[i]); 
    // reversedStr = str[i] + reversedStr;
    reversedStr = reversedStr + str[i];
    // str[10]
    // str[9]
}
console.log(reversedStr); // tpircSavaJ