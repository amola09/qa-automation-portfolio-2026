/* 
JSON : JavaScript Object Notation.

*/

let a = 100;

let obj = {

    name: "John Philip",
    age: 29,
    isStudent: false,
}

// js objcet vs Json object

/* 
JSON:

FE <-----API-------> BE


JSON Object (string)
{
  "name": "Amol Raut",
  "email": "amolaR@gmail.com",
  "mobile": "7722334422",
  "message": "json"
}


string 
  |
JS object
  |
string

*/


let b = {
  "name": "Amol Raut",
  "email": "amolaR@gmail.com",
  "mobile": "7722334422",
  "message": "json"
}


console.log(typeof obj); // object

let str = JSON.stringify(obj)
console.log(str, typeof str)
// {"name":"John Philip","age":29,"isStudent":false} string

let Obj2 = JSON.parse(str)
console.log(Obj2, typeof Obj2)
// { name: 'John Philip', age: 29, isStudent: false } object