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