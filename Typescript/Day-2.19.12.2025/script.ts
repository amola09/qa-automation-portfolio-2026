console.log("Let's learn Typescript")

// now lets check the value and data type updatation

let emp_id = 1112

// value ---> 1112
// data type ---> number

emp_id = 20

// now lets update data type

//emp_id = "10002" // error TS2322: Type 'string' is not assignable to type 'number'.

// when we try to change data type it gives error at compile time
// Because TS is strongly/static typed language

console.log(emp_id) 
