let numbers = [11,22,33,44,55,66,77,88]
let q1 = numbers.filter(function(el){
    return el > 40
})
console.log(q1)

let q2 = numbers.find(function(el){
    return el > 40
})
console.log(q2)


let arr = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"ayush",
        lastName:"jain"
    },
    {
        firstName:"satendra",
        lastName:"rai"
    }
]

let q3 = arr.find(function(el){
        return el.firstName == "ayush"
})
console.log(q3)

// findIndex()


let numbersB = [11,22,33,44,55,22,33]


let q22 = numbersB.filter(function(el){
    return el > 40
})
let q23 = numbersB.find(function(el){
    return el > 40
})
let q24 = numbersB.findIndex(function(el){
    return el > 40
})
console.log(q24)

// every()
// boolean
let names = ["sarika","sumit","sham","satish","amol","sai"]
let q4 = names.every(function(el){
    return el.length >= 4
})
console.log(q4)


// some
// boolean

names = ["sarika","sumit","sham","satish","amol","sai"]

let q33 = names.some(function(el){
    return el.length >= 6
})
console.log(q33)

// map(), filter(), reduce(),forEach()
// find(), findIndex(),some(),every()


// slice()
//             0        1        2        3        4
let cities = ["pune","nagpur","indore","bhopal","ujjain"]
//             -5     -4        -3        -2       -1

//cities(startIndex,endIndex(not included))
console.log(cities.slice(1))
console.log(cities.slice(1,4))
console.log(cities.slice(1,-1))
console.log(cities.slice(-5,-2))
console.log(cities.slice(-1,-5))

// splice()
//                 0         1          2         3
let countries = ["india","pakistan","srilanka","japan"]
// countries.pop()
// countries.shift()
// console.log(countries)
// countries.splice(startIndex,numberOfElement,rep1,rep2)
countries.splice(1,2,"USA","China","Mexico")
console.log(countries)

// playwright --> 
// monday