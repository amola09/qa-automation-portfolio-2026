//              0        1        2        3
let names = ["chinmay","samay","ninad","satish"]
console.log(names)
// Does array stores the value by index ?? - Yes
names = ["chinmay","samay","ninad","satish"]
console.log(names[0])
// updating the value 
names[0] = "tanmay"
console.log(names)
// total number of elements in array 
console.log(names.length)

// program 2
// Create , Retrive , Update , Delete


// Method -Gym
// Action  - Exercise
// Return  - Health

// Arrays -> 
//              0       1         2        3
// let cities = ["pune","mumbai","kolkata","chennai"]
// console.log(cities)

// let q1 = cities.push("nagpur")
// console.log(q1)
// console.log(cities)

// let q2 = cities.unshift("wardha")
// console.log(q2)
// console.log(cities)

// let q3 = cities.pop()
// console.log(q3)
// console.log(cities)

// let q4 = cities.shift()
// console.log(cities)
// console.log(q4)

// // program 4
// //               0        1       2       3
// let fruits = ["apple","banana","grapes","grapes"]
// let q5 = fruits.includes("apple")
// console.log(q5)

// let q6 = fruits.includes("Apple")
// console.log(q6)

// let q7 = fruits.indexOf('apple')
// console.log(q7)
// console.log(q7)

// let q8 = fruits.indexOf('Apple')
// console.log(q8)

// fruits = ["apple","banana","grapes","grapes"]
// let q9 = fruits.at(2)
// console.log(q9)

// fruits = ["apple","banana","grapes","grapes"]
// fruits.reverse()
// console.log(fruits)

// fruits.sort()
// console.log(fruits)


// 8 methods 
// map()
let numbers = [11,22,33,44,55,66]
// [13,24,35,46,57,68]
// fn(el,index,arr)

let q10 = numbers.map(function(el,index,arr){
   // console.log(el,index,arr)
   return el + 2
})
console.log(q10)


let names2  = ["chinmay","ram","sham"]
let q11 = names2.map(function(el,index,arr){
    return el.toUpperCase()
})
console.log(q11)

// filter()

let marks = [90,34,55,66,77,44,55]
let q14 = marks.filter(function(el,index,arr){
    return el > 70
})
console.log(q14)

marks = [-99,100,33,44,55,6,-88,11,22]


let deposit = marks.filter(function(el){
    return el > 0
})

let withdrawl = marks.filter(function(el){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// forEach()
let items = ["onion",'tomato','potato','brinjal','ladyfinger']
let amounts = [11,34,55,66,77]
// onion:11
items.forEach(function(el,index){
    console.log(`${el}:${amounts[index]}`)
})