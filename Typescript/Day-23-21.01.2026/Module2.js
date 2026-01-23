"use strict";
// importing exported code from Modules1.ts
Object.defineProperty(exports, "__esModule", { value: true });
// export:   import {  } from "path";
var Module1_1 = require("./Module1");
console.log(Module1_1.default); // 10
// importing default exported code from Modules1.ts ----> export default:   import  from "path";
// import a from "./Module1";
// console.log(a); // 10
// importing multiple exported code from Modules1.ts ---> export:   import {  } from "path";
var Module1_2 = require("./Module1");
console.log(Module1_2.aa); // 10
console.log(Module1_2.b); // true
console.log(Module1_2.c); // Hello
var obj = require("./Module1");
console.log(obj.aa); // 10
console.log(obj.b); // true
console.log(obj.c); // Hello
