// importing exported code from Modules1.ts

// export:   import {  } from "path";

import  a  from "./Module1";
console.log(a); // 10

// importing default exported code from Modules1.ts ----> export default:   import  from "path";

// import a from "./Module1";
// console.log(a); // 10

// importing multiple exported code from Modules1.ts ---> export:   import {  } from "path";
import { aa, b, c } from "./Module1";

console.log(aa); // 10
console.log(b); // true
console.log(c); // Hello

import * as obj from "./Module1";

console.log(obj.aa); // 10
console.log(obj.b); // true
console.log(obj.c); // Hello