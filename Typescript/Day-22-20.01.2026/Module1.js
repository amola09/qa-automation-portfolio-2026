"use strict";
// can transfer code from file1 to file2
// file code can called module
// have types of modules: commanJS, ECMAScript
Object.defineProperty(exports, "__esModule", { value: true });
exports.c = exports.b = exports.aa = void 0;
// commanJS modules: export, impoert
// using export keyword: code converting in json object to export
// export let a = 10;
// transfer --> export
// Object ---> JSON
// using export default: Not converting in json object to export
var a = 10;
exports.default = a;
// can export multipal items from single file using export keyword
var aa = 10;
exports.aa = aa;
var b = true;
exports.b = b;
var c = "Hello";
exports.c = c;
// // {{}}
