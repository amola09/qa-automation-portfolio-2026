// includes()
// string --> boolean 
let firstName = "Shakira"
let q1 = firstName.includes("ira")
console.log(q1)

// trim()
//<h1>Chinmay </h1> // "Chinmay "
// "Chinmay"
let q2 = "  Amol "
console.log(q2.trim())

// toLowerCase()
let firstNameC = "Amol"
let q4 = firstNameC.toLowerCase()
console.log(q4)

// replace()
let info = `I am Rahul and login time ${new Date()}`
//10-02-2026
console.log(info)
let info2 = "I am learning js"
console.log(info2.replace("js",'python'))

// map()

let apiValues = ['january',"february","march"]
{/* <ul>
    <li>january</li>
    <li>january</li>
    <li>march</li>
</ul> */}

let birthYear = [2006,2007,2008,2009,2011.2005]
let q5 = birthYear.map(function(el,index,arr){
   return 2026 - el 
})
console.log(q5)

// filter()
// Api --> 100
// Ui -- filter --> DXC

let employee = [
    {
        fullName:"Amol Pawar",
        companyName:"dxc"
    },
    {
        fullName:"sarika gund",
        companyName:"bitwise"
    },
    {
        fullName:"amol rao",
        companyName:"dxc"
    }

]

let filteredDate = employee.filter(function(el){
    return el.companyName == "dxc"
})
console.log(filteredDate)

// every()
let numbers = [19,20,21,22,23]
let q3 = numbers.every(function(el){
    return el >= 19
})
console.log(q3)




// some()

// find()

// Object.keys()

// Object.values()

// key- value()








// ---------------------------------------------------------
console.log("---------------------------------")
// includes () --> string to boolean
let fName = "Radhika"
console.log(fName.includes("a"))


// trim() --> return new string
let Vehicle = " BMW "
console.log(Vehicle.trim().length)

// toUppercase()--> return new string

console.log(Vehicle.toUpperCase().trim())
// tolowercase()--> return new string
console.log(Vehicle.toLowerCase().trim())

let login = `I am amol and login time :${new Date()}`
console.log(login)

// replace() --> return new string
let info1 = "I am learning JS Methods"
console.log(info1.replace("JS","TS"))


// map() returns new array
let birthYear2 = [1999,1980,1988,2006,2000]
let age = birthYear2.map(function(el){
    return 2026 - el
})
console.log(age)


//filter --> returns new array

let emp = [
    {
        en:"Rakesh",
        comp:"Dell"
        
    },
    {
        en:"Mahesh",
        comp:"Microsoft"
        
    },
    {
        en:"Ramesh",
        comp:"Dell"
        
    }
]

let filterName = emp.filter(function(el){
    return el.comp === "Dell"
})
console.log(filterName)

let numbers1 = [19,20,29,25,27,18,16]

let p1 = numbers1.every(function(el){
    return el <=19
})
console.log(p1)

