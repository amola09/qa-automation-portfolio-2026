"use strict";
// /// <reference path="./nameSpace1.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(group.flag); // true
//  tsc .\nameSpace2.ts --outFile nameSpace2.js
var nameSpace1_1 = require("./nameSpace1");
console.log(nameSpace1_1.groupExported.flag); // I am exported
