let a = 10
let b
console.log(b); // undefined

// can able to assign default value to the function variable
// Default value can update at time function calling if argument have passed

function funOne(para1, para2 = "TS") {
    console.log(para1, para2)
}

// funOne("Hi", "JS") // Hi JS

// Withot default parameter
// funOne("Hi"); // Hi undefined
funOne("Hi"); // Hi TS