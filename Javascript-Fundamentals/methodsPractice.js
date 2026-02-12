// 1.String 

// properties : constructor,length,prototype

// methods and there return type:


//String.raw()

const str = "Javascript"

console.log(str.charAt(1)) // string
console.log(str.charCodeAt(0)) // number
console.log(str.codePointAt(2)) // number

console.log(str.concat("Typescript")) // string

console.log(str.includes("g")) // boolean

console.log(str.lastIndexOf("t")) // number

console.log(str.repeat(3)) // string

const str1 = " Typescript "

console.log(str1.trim().length)
console.log(str1.trimStart().length)
console.log(str1.trimEnd().length)


console.log(str.replace())
str.replaceAll("Typescript", "Javascript") // Javascript  // string

console.log(str.slice(0, 3)) // string
console.log(str.substring(0,2))  // string

console.log(str.split("a")) // [ 'J', 'v', 'script' ]  //array

console.log(str.startsWith("J")); // boolean
console.log(str.endsWith("t")); // boolean

console.log(str.toUpperCase()) // string
console.log(str.toLowerCase())// string

console.log(Boolean(0)) // false 
console.log(Boolean(-0)) // false 
console.log(Boolean(null))// false 
console.log(Boolean(undefined))// false 
console.log(Boolean(NaN))// false 
console.log(Boolean(""))// false 


console.log("---------Array Methods----------")

let arr = [1,"Two",-3,4,true,{},[""]]
let arr2 = [null,undefined,NaN]

console.log(Array.isArray(arr)) // boolean
console.log(arr.concat(arr2)) // array
console.log(arr.push(0)) // number
console.log(arr.unshift(3)) // number

console.log(arr.pop()) // string
console.log(arr.shift()) // number

console.log(arr.reverse()) // array

console.log(arr.join(",")) // string
console.log(arr.includes(0)) // boolean

console.log(arr.splice(0,3))
console.log(arr.slice(1,3))

console.log(arr.indexOf(1))

console.log(arr.lastIndexOf())


// find((​ele​ment, index, array) => { ... } )
// findIn​dex​((item, index, array) => { ... } 

// forEac​h(c​all​back, thisArg)
// map(ca​llback [, thisArg])
// filter​(ca​llback, thisArg);
// reduce​(ca​llb​ackFn, initia​lValue)
// some(c​all​back[, objetT​his])
// every(​cal​lback[, thisArg])
// sort(f​onc​tio​nCo​mpa​raison)
// flat(d​epth)
// flatMa​p(f​unc​tion)