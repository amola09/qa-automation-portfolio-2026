let   a  = 10
console.log(a)
const b = 23
console.log(b)
//b = 23  // Asssignment to const variable

// let and const are blocked scope
{
    let a1 = 100
    console.log(a1)
}
{
    const b1 = 100
    console.log(200)
}

let s1 = 30 
console.log(typeof s1)

const s2 = 20.5
console.log(typeof s2)

const s3 = true 
console.log(typeof s3)

const s4 = "Amol"
console.log(typeof s4)

const s5 = [11,23,44,55,66]
console.log(typeof s5)

const s6 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    1:"admin"

}
// null , undefined , NaN
const ApiValue = null
let varOne ;
console.log(varOne)
console.log(undefined+ undefined)// NaN
let mapA = new Map([
    [1,"admin"],
    [2,"manager"],
    [3,"customer"],
    [4,"admin"]
])

let setA = new Set([11,22,33,44,55])
console.log(setA)

//----------------------------------------------------------

// variable - keyward
let a1 = 1 
var a2 =  "Favicon"
const a3 = true

console.log(a1)
console.log(a2)
console.log(a3)
console.log("-------------------")

// re assign value
a1 = 1.2
a2 = "HTML"
// a3 = false // assignment to constant variable
console.log(a1)
console.log(a2)
console.log(a3)

console.log("-------------------")
// scope

// let and const are blocked scope
{
    let a1 = 100
    console.log(a1)
}
{
    const b1 = 100
    console.log(b1)
}
console.log("-------------------")

// Data types

let p1 = 12
console.log(typeof p1)

let p2 = 12.30
console.log(typeof p2)

let p3 = "JS"
console.log(typeof p3)

let p4 = true
console.log(typeof p4)

let p5 = [1,2,3,4,5]
console.log(typeof p5)

let p6 = {
    fn : "Rakesh",
    ln: "Patil"
}
console.log( typeof p6)

// null, undefined, NaN

let APIval = null
console.log(APIval)
let vartwo 
console.log(vartwo)
console.log(undefined + undefined)

console.log("----------------")

// Map Set

let map1 = new Map([
    [1,"Admin"],
    [2,"Hr"],
    [3,"Employee"]
])
console.log(map1)

let set1 = new Set([11,11,22,33,33,44])
console.log(set1)