let info = {
    fn:"Hitesh",
    ln:"deshpande",
    age:21,
    exp:6
}

Object.keys(info) // ["fn","ln","age","exp"]
Object.values(info)//["Hitesh","deshpande",21,6]
Object.entries(info)//

// [
//     ["fn","chinmay"],
//     ["ln","deshpande"],
//     ["age",23],
//     ["exp",2]
// ]

let address = {
    city:"pune",
    country:"india"
}

let obj6 = Object.assign(info,address)
console.log(obj6)

// Object.freeze

Object.assign(obj6)
let Obj7 = {
    fn:"Ramesh",
    ln:"deshpande",
    age:23,
    exp:2
}
let q1 = Object.hasOwn(Obj7,'fn')
let q2 = Object.hasOwn(Obj7,'Fn')
console.log(q1)
console.log(q2)

let q3 = Obj7.hasOwnProperty('fn')
let q4 = Obj7.hasOwnProperty('Fn')

// Numbers 
Number("123")
parseFloat("10.99")
parseInt("10.99")


// -----------------------------------------

console.log("-------------------------------")

let info2 = {
    fName:"Rajesjh",
    lName:"Bandgar",
    rlNo:21,
    age:32
}
console.log(Object.keys(info2))
console.log(Object.values(info2))
console.log(Object.entries(info2))


// Object.assign () --> copy value from other objects and return new object
let biodata = {
    address:"Pune",
    country:"India"
}
let b1 = Object.assign(info2,address)
console.log(b1)

// Object.freeze : prevents modifying properties of existing object

let Vehicle = {
    model:"BMW",
    engineType:"Petrol",
    country:"India"
}
let v1 = Object.freeze(Vehicle)
Vehicle.color = "red"
console.log(Vehicle)

// Object.hasOwn -: determine whether the Object has a property with specified name
let v2 = Object.hasOwn(Vehicle,"model")
console.log(v2)
let v3 = Object.hasOwn(Vehicle,"Model")
console.log(v3)


// Object.hasOwnProperty
let v4 = Vehicle.hasOwnProperty("country")
console.log(v4)
let v5 = Vehicle.hasOwnProperty("enginetype")
console.log(v5)

