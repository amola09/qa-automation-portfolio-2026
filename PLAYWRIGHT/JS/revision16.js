// falsy 


if(undefined){
    console.log("hello")
}
else {
    console.log("bye")
}

if(NaN){
    console.log("hello")
}
else {
    console.log("bye")
}
if(0){
    console.log("hello")
}
else {
    console.log("bye")
}

if(null){
    console.log("hello")
}
else {
    console.log("bye")
}

if(3 > 4){
    console.log("hello")
}
else {
    console.log("bye")
}


if(""){
    console.log("hello")
}
else {
    console.log("bye")
}


// truthy


if([]){
    console.log("hello")
}
else {
    console.log("bye")
}

if({}){
    console.log("hello")
}
else {
    console.log("bye")
}

if(" "){
    console.log("hello")
}
else {
    console.log("bye")
}

if("A"){
    console.log("hello")
}
else {
    console.log("bye")
}

if(1){
    console.log("hello")
}
else {
    console.log("bye")
}

// Shortcircuit AND && operators 
// let q1 = true && "hello"
// console.log(q1)


// let q2 = false && "hello"
// console.log(q2)

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:undefined

}
let x1 = info.age && info.age
console.log(x1)

let numA = 0
let x2 = numA && "ram"
console.log(x2)

// const isVisible = await page.locator('#login').isVisible()
//isVisible && console.log("login in button visible on page")

// Shortcircuit - ||
let x3 = 2 || 2 > 1
console.log(x3)
x3 = 0 || 2 > 1
console.log(x3)
x3 = 7  || 6 > 1
console.log(x3)

// Nullish Coalescing // null , undefined

let x4 = 0 || 10
console.log(x4)

let x5 = undefined ?? 10
console.log(x5)