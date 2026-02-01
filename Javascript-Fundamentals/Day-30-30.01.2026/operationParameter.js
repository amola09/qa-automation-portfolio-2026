let obj = {
    namee: "js",
    age: 10
}

console.log(obj.age); // 10
console.log(obj.lastName); // undefined
console.log(obj.lastName?.age); // undefined



// nullish (??) --> null , undefined

console.log("Hi" ?? "Js"); // "Hi"
console.log(null ?? "Js"); // "Js"
console.log(undefined ?? "Js"); // "Js"

let a = null ?? "Js";
a = "Hi" ?? "Js";
console.log(a); // Hi