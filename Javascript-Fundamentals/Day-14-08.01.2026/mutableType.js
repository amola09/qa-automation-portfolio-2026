/* 
2. Non- Primitive data types:- mutable (can update original value)
    1. Object (E.g.Date,);
    2. Array
    3. Function  
    4. RegEx  
*/

/* 
Object:

            = value

            = {
                key1:value1,
                key2:value2

            }

*/

let vehicle = "Audi"
vehicle = "Bmw"
console.log(vehicle)

// object literal

let student ={
    rollNo:10,
    sName:"Rajesh more"
}

console.log(student)
console.table(student)

// Retrive values:
// 1. dot notation:
console.log(student.rollNo); // Ram

// console contains table
// console contains log

// 2. Bracket notation:
console.log(student['rollNo']); // Ram
console.log(student['sName']); // abc



// why two ways ?

// Update values:
console.table(student);
student['sName'] = "shiv"
console.log(student['sName']);
console.table(student);