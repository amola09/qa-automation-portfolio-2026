// Modules in Js

// some()
let numbers = [11,22,33,44,55]
let q1 = numbers.some(function(el){
    return el > 50
})
console.log(q1)

//every()
numbers = [11,22,33,44,55]
let q2 = numbers.every(function(el){
    return el > 10
})
console.log(q2)
let q3 = numbers.every( el=>el > 10)
console.log(q3)

// find()
//              0  1  2   3  4  5
let numbersC = [55,66,77,88,99,100]
let q4 = numbersC.filter(function(el){
    return el > 60
})
console.log(q4)

let q5 = numbersC.find(function(el){
    return el > 60
})
console.log(q5)

// findIndex()
let q6 = numbersC.findIndex(function(el){
    return el > 60
})
console.log(q6)

// Objects 
// Properties and methods 

let info = {
    // prop :value
    // key:value
    firstName:"Anand",
    lastName:"Pise",
    age:23,
    firstName:"amol"
}

// retrive (dot notation and bracket)
console.log(info.firstName)
console.log(info['firstName'])

// update (dot notation and bracket)
info.firstName = "Ayanmol"
info['firstName'] = "Ukti"
console.log(info)

// add  (dot notation and bracket)

info.city = "pune"
info['language'] = "marathi"
console.log(info)

// delete (dot notation and bracket)

delete info.city
delete info['language']
console.log(info)



let info2 = { 
    firstName:"Rahul",
    lastName:"deshpande",
    age:23,
    rollNo:34
}
console.log(Object.keys(info2))
console.log(Object.values(info2))


info2 = { 
    firstName:"Rakesh",
    lastName:"deshpande",
    age:25,
    rollNo:30
}
let obj3 = Object.assign(info2,{city:"pune",language:"marathi"})
console.log(obj3)


info3 = {
    name:"raj",
    role:"tester",
    exp:3
};

Object.freeze(info3)
info3.exp2 = 4
console.log(info3)


// numbers methods



// math 



// date



//-----------------------------------------------------------
console.log("--------------------------------------------------")


// some
let numbeR = [10,20,30,40,50,60]
let p1 = numbeR.some(function(el){
    return el > 15
})
console.log(p1)  // true

// every
let p2 = numbeR.every(function(el){
    return el < 5
})
console.log(p2) // false


let p3 = numbeR.every(el=>el<5)
console.log(p3) // false


let numberPrime = [2,4,6,8,10]
let p4 = numberPrime.filter(function(el){
    return el < 6
})
console.log(p4) // [ 2, 4 ]

console.log("--------------------------------------------------")

// find
let p5 = numberPrime.find(function(el){
    return el < 6
})
console.log(p5)


// findindex
let p6 = numberPrime.findIndex(function(el){
    return el > 6
})
console.log(p6)


// objects -  
// properties and Methods
let infon = {
    firstN: "Rajesh",
    lastN: "Swami",
    age: 25
}


// retrive
console.log(infon.firstN)
console.log(infon["lastN"])

// update 
infon.lastN = "patil"
infon['firstN'] = "Ramesh"
console.log(infon)

// create /add
infon.skill1 = "JS"
infon["skill2"] = "TS"
console.log(infon)

// delete

delete infon.skill1
delete infon["skill2"]
console.log(infon)


console.log("--------------------------------------------------")

let infom = {
    fn : "Brian",
    ln : "warne",
    rl : 23, 
    ag : 32
} 
console.log(Object.keys(infom))
console.log(Object.values(infom))

infom = {
    fn: "Shanta",
    ln: "Mohan",
    rl : 15,
    ag: 45
}
console.log(Object.assign(infom,{post:"Manager",city :"Pune"}))
console.log(infom)

let infor = {
    name: "Rajesh Negi",
    exp : 8
}
console.log(Object.freeze(infor))
infor.exp = 5
console.log(infor)