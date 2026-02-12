/* 
* search string:
        search(string/RegExp)
        indexOf(string, index(startPoint))
        lastIndexOf(string, index(startPoint))
        includes(subString, index(startPoint))
*/

//  lastIndexOf(string, index(startPoint))
console.log("JavaScript".lastIndexOf("a")) // 3
console.log("JavaScripta".lastIndexOf("a")) // 10

//  includes(subString, index(startPoint))
console.log("JavaScripta".includes("a"))  // true
console.log("JavaScripta".includes("a", 2)) // true
console.log("JavaScript".includes("a", 4)) // false
console.log("JavaScript".includes("ava")) // true


/* 

* Retrive sub-string:
        slice(start, end(not included))
        substring(start, end)
        substr(start, length)
*/

//   slice(start, end(not included))

let str = "JavaScript";
console.log(str.slice(0, 3)) // Jav
// // Ind > 
console.log(str.slice(0, 4)) // Java
console.log(str) // JavaScript

//    substring(start, end)
console.log(str.substring(0)) // JavaScript
// endIndex = 9

console.log(str.substring(0, 4)) // Java
// Ind => 
console.log(str) // JavaScript

// substr(start, length)

console.log(str.substr(0, 6)) // JavaSc

/* 
* Datatype conversion:
        toString()
        split(splitPoint)

*/

let aa = 10;
console.log(typeof aa); // number


// toString()
console.log(aa.toString()) // 10
console.log("str".toString())
console.log(typeof true.toString()); // string

// split(splitPoint)
console.log("JavaScript".split()); // [ 'JavaScript' ]
console.log("JavaScript".split("")); // [  'J', 'a', 'v', 'a','S', 'c', 'r', 'i','p', 't']
console.log("JavaScript".split("S")); // [ 'Java', 'cript' ]
console.log("Hi JavaScript".split(" ")); // [ 'Hi', 'JavaScript' ]