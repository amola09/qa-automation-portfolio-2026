/* 
3. Ternary operators: 
    1. conditional operator.

    syntax:

    condition ? true statement : false statement

    condition --> true/false

*/


true ? console.log("Im TRUE") : console.log("Im FALSE");
false ? console.log("Im TRUE") : console.log("Im FALSE");

(10 > 2) ? console.log("Im TRUE") : console.log("Im FALSE");

let output = (10 > 2) ? "Im TRUE" : "Im FALSE";

console.log(output); // Im TRUE


//1. Age Check (Driving Eligibility)

let age = 17
let canDrive = age>=18 ?"Yes":"No" 
console.log(canDrive)

//2. Login Status (UI Display)

let isLoggedIn = true
let message = isLoggedIn ? "Welcome back":"Please login"
console.log(message)

//3. Discount Applied or Not

let total = 1200;
let finalPrice = total > 1000 ? total * 0.9 : total;
console.log(finalPrice)

//4.Theme Mode (Dark / Light)

let isDarkMode= false
let theme = isDarkMode ?"dark":"light"
console.log(theme)

// 5.API 
let response = true
let statusA = response?"Success":"Failed"
console.log(statusA)

// 6. Stock Availability

let stock = 0;
let availability = stock > 0 ? "In Stock" : "Out of Stock";

//7. Default Value (Null / Undefined)

let inputName = ""
let username = inputName ? inputName : "Guest";
console.log(username)


//8. pass fail result

let marks = 38;
let result = marks >= 40 ? "Pass" : "Fail";
console.log(result)