// can transfer code from file1 to file2
// file code can called module
// have types of modules: commanJS, ECMAScript

// commanJS modules: export, impoert


// using export keyword: code converting in json object to export

// export let a = 10;
// transfer --> export
// Object ---> JSON

// using export default: Not converting in json object to export
let a = 10;
export default a;


// can export multipal items from single file using export keyword
let aa = 10;
let b = true;
let c = "Hello";

export { aa, b, c };

// {{}}