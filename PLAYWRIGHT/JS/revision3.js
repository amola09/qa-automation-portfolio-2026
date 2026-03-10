//function declaration 
function Calculator(x,y){
    console.log(x+y)
    return x + y
}
let q1 = Calculator(12,3)
console.log(q1)
    // function expression

let CalculatorB = function(x,y){
        return x + y
}
let q2 = CalculatorB(12,3)
console.log(q2)

// arrow function

// let CalculatorC = (x,y)=>{
//         return x + y
// }

// only one statement
let CalculatorD = (x,y)=> x + y
let q3 = CalculatorD(23,4)
console.log(q3)
let CalculatorE = x=> x * y


// destructure 

let numbers  = [11,22,33]
// let q11 =numbers[0]
// let q12 =numbers[1]
// let q13 =numbers[2]
// console.log(q13)

let [a,b,c]= numbers
console.log(a)
console.log(b)
console.log(c)

let numbersA = [11,22,33]
let numbersB = [22,33,44]
let numbersC  = [...numbersA,...numbersB]
console.log(numbersC)

let numbersE  = [11,22,33,55,66,77,88,99]
let q33  = [a,...b] = numbersE
console.log(q33)

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    city:"pune",
    language:"marathi"
}
console.log(info)
let {firstName,lastName,...obj1} = info
console.log(firstName)
console.log(lastName)
console.log(obj1)


let obj2 = {
    fn:"chinmay",
    ln:"deshapande",
    rollNo:23,
    age:33
}

function displayRollNo({rollNo,age}){
    console.log(rollNo)
    console.log(age)
}
displayRollNo(obj2)

let names = ["samay","ram","sham"]
function getFirstName(a,...q){
    console.log(a)
}
getFirstName(...names)



// -----------------------------------------------------------

// function & function type

function declarationCal(a,b){
    console.log(a+b)
    return a - b
}
let p1 = declarationCal(3,2)
console.log(p1)


let expressionCal = function(a,b){
    console.log(a+b)
    return a - b
}
let p2 = expressionCal(5,4)
console.log(p2)


let arrowCal = (a,b) =>{
    console.log(a+b)
    return a - b
}
let p3 = arrowCal(7,6)
console.log(p3)


console.log("-----------------")

// destructure  with Array

let numberA  = [11,22,33]
console.log(numberA[0]) // 11
console.log(numberA[1])
console.log(numberA[2])

let [a1,b1,c1] = numbersA
console.log(a1)
console.log(b1)
console.log(c1)

let numberB = [11,22,33,44]
let numberC = [55,66,77,88]
let numberD = [...numberB,...numberC]
console.log(numberD)

let numberE = [1,2,3,4,5,6,7,8]
let p7 = [a,...b] = numberE
console.log(p7)


// destructure  with Object
let info3 = {
    fName:"Ritesh",
    lName:"deshpande",
    age:25,
    city:"pune",
    language:"marathi"
}
console.log(info3)
let {fName,lName,...obj3} = info3
console.log(fName)
console.log(lName)
console.log(obj3)


let obj4 = {
    fn1:"Raju",
    ln1:"Gentleman",
    rno: 13,
    age:23
}

function displayRollNumber({rno,age}){
    console.log(rno)
    console.log(age)
}
displayRollNumber(obj4)


let names1 = ["sam","sham","ram","rasi"]

function getFirstNm(d1,...d3){
    console.log(d1)
}
getFirstNm(...names1)

//08.03.2026
const user = {
  name1: 'John Doe',
  email: 'john@example.com',
  age: 30
};
let {name1,email,age} = user
console.log(name1)
console.log(email)
console.log(age)


const product = {
  name2: 'Laptop',
  price: 999.99,
  quantity: 5
};
let {name2,price,quantity} = product
console.log(name2)
console.log(price)
console.log(quantity)

const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022
};
let {make,model,year} = car
console.log(make)
console.log(model)
console.log(year)


function displayCar({make,model,year}){
    console.log(make)
    console.log(model)
    console.log(year)
}
displayCar(car)

let carNames = ["Innova","Swift","Scorpio","Cruiser","Nano"]
function cName(d1,d2,d3,...d4){
    console.log(d1)
    console.log(d2)
    console.log(d3)
    console.log(d4)
}
cName(...carNames)