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