// reverse the given string using for loop
let str = "JavaScript";
//         0123456789
// length === last index + 1
// length - 1 === last index

let reversedStr = "";

// Using reverse for loop:
// 10 start
// 0  End
for (let i = str.length - 1; i >= 0; i--) { // 
    // console.log(str[i]); 
    // reversedStr = str[i] + reversedStr;
    reversedStr = reversedStr + str[i];
    // str[10]
    // str[9]
}
console.log(reversedStr); // tpircSavaJ