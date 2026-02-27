// javascript --- typescript --- playwright -- ui -- api --- repsonsive -- mcp -- agents
// llm -- label data --- 
// prompt engineering
// agentic AI 
// python
// git copilot
// cursorAI
// mobile
// API

let a = [11,22,33]
let b = a
b.push(44)
console.log(a)
console.log(b)

let names = ["chinmay","shirsh","ram"]
let arr = [...names]
arr.push("sarika")
console.log(names)
console.log(arr)

let numberA = [11,22,33]
let numberB = [44,55,66]
let arr3 = [...numberA, ...numberB]
console.log(arr3)

let arr4 = [..."hello"]
console.log(arr4)

// program 2

let user = {
    name:"chinmay",
    age:36
}

let user2 = user
// user2['name']= "tanmay"
// console.log(user2)
// console.log(user)

let user3 = {...user}
user3['name']= "ram"
console.log(user3)
console.log(user)

// program 3
user = {
    name:"chinmay",
    age:36,
    salary:50000,
}
let user4 = {...user,salary:60000}