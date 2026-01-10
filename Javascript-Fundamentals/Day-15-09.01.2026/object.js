let a = "JS";
// "JS" --> string
// a --> string

// object literal
let obj = {
    // key: value datatype
    // key datatype? --> can define keys in string
    keyOne: "Hi",
    keyTwo: 10,
    'key Three': true
    // string key
}

// object key --> string
console.log(obj) // { keyOne: 'Hi', keyTwo: 10, 'key Three': true }

// Retrive:
// Dot. notation vs Bracket[] notation
console.log(obj.keyTwo) // 10

// 1. To retrive space contained key (keyName) we can only able to use bracket notation

console.log(obj['key Three'])// true


//2. for loop:  Not able to use dot notation.

// delete key from object
console.table(obj)
delete obj.keyTwo
console.table(obj)


//Q. How many ways can create object in js?

/* 
1. object literal
2. class 
3. function 
4. Object
5. Object.create() */


// 4. Object:

// let objNew = { keyOne: 'Js', keyTwo: 10 };

// let objNew = Object({ keyOne: "Js", keyTwo: 10 });
// console.log(objNew); // { keyOne: 'Js' }

// 5. Object.create(prototype, option):

let aa = { keyOne: "Js", keyTwo: 10 }
let objNew2 = Object.create(aa);
console.table(objNew2);
console.table(objNew2.key3 = 12);

console.table(objNew2);



let car ={
    carName: "Ferrari",
    carEngine: "disel",
    'car Color': 'Red' 
}

console.log(car.carName)
console.log(car['carEngine'])
console.log(car['car Color'])

console.table(car)
delete car.carName
console.table(car)


let objOne = ({rollNo:101,name:"Maruti"})
console.log(objOne)