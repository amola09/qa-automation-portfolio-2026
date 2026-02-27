let arr  = [10,20,30]
// let a1 = arr[0]
// let a2 = arr[1]
// let a3 = arr[2]

// console.log(a1)
// console.log(a2)
// console.log(a3)


let [a1,a2,a3] = arr
console.log(a1)
console.log(a2)
console.log(a3)

arr  = [10,20,30]
let [x1,,x2] = arr
console.log(arr)
console.log(x1)
console.log(x2)

let arr2 = [5]
let [x11 =0 ,y11 = 0]= arr2
console.log(x11)
console.log(y11)


let names  = ["ram","sham","sai","sarika"]
let [n1,...n2] = names
console.log(n1)
console.log(names)

// program 4
let arr5 = [11,222,333,444]
function displayFirstTwo(x,y){
    console.log(x,y)
}
displayFirstTwo(...arr5)

// object destructing

let info = {
    firstName:"Ritesh",
    lastName:"Deshmukh",
    age:34
}
let {firstName:fn,lastName:ln,age:ag} = info
console.log(fn)
console.log(ln)
console.log(ag)
let {firstName,...userd} = info // firstname sepreate and remaining values are in userd
console.log(firstName)
console.log(userd)

let arr11 =[11,22,33]
let arr22 = [44,55,66] 
//[11,22,33,44,55,66]
let arr3 = [...arr11,...arr22] // new copy
console.log(arr3)

let infoA = {
    firstName:"Shantanu",
    lastName:"deshpande"
}
let infoB = {
    language:"marathi",
    city:"pune"
}
let infoC = {...infoA,...infoB}
console.log(infoC)

console.log("=============================")

// 1,2,3,4 ---> [1,2,3,4] ---> rest ---> combine array values
// [1,2,3,4] ---> 1,2,3,4 ---> spread ---> seperate array values

let aarr = [31,32,33]
let aa = aarr[0] 
let aa1 = aarr[1]
let aa2 = aarr[2]

console.log(aa)
console.log(aa1)
console.log(aa2)


// 1,2,3,4 ---> [1,2,3,4] ---> rest ---> combine array values
// [1,2,3,4] ---> 1,2,3,4 ---> spread ---> seperate array values

let [aaa1,aaa2,aaa3] = aarr
console.log(aaa1)  // 31
console.log(aaa2)// 32
console.log(aaa3)// 33

let [y1,,y2] = aarr
console.log(aarr)//  [ 31, 32, 33 ]
console.log(y1) // 31
console.log(y2) // 32


// 1,2,3,4 ---> [1,2,3,4] ---> rest ---> combine array values
// [1,2,3,4] ---> 1,2,3,4 ---> spread ---> seperate array values

let names12 = ["Amol","Rahul","Rutuja","Vaishnavi","Mayuri"]
let [m1,...m2] = names12
console.log(m1)
console.log(m2)

// 1,2,3,4 ---> [1,2,3,4] ---> rest ---> combine array values
// [1,2,3,4] ---> 1,2,3,4 ---> spread ---> seperate array values

// Display two values
let arr4 = [10,20,30,40,50]
function disFirstTwo (a,b){
    console.log(a,b)
}
disFirstTwo(...arr4) // 10 20

let loginInfo = {
    uName:"Jhon",
    loginTime:"10:00:00",
    location:"Pune"
}
let {uName:un,loginTime:lt,location:loc} = loginInfo
console.log(un)// Jhon
console.log(lt) //10:00:00
console.log(loc) // Pune

let {uName,...otherInfo} = loginInfo
console.log(uName) // Jhon
console.log(otherInfo) // { loginTime: '10:00:00', location: 'Pune' }

// now combine two arrays

let arrr1 = [1,2,3,4,5]
let arrr2 = [6,7,8,9,10]

let arrr3 = [...arrr1,...arrr2]
console.log(arrr3)


// now combine two objects

let info1 = {
    name1:"Rahul",
    lName:"Singh"
}
let info2 = {
    skill:"python",
    location:"pune"
}

let info3 = {...info1,...info2}
console.log(info3)