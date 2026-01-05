var arr = [1, 2];
//                   0  1
console.log(arr);
// tuple : -
// syntax:  let/const/var tupleName:[type1, type2, ..., typen] = [vlaue1, value2, ..., valuen]
var tupleThree = [1, "ts"];
//let tupleTwo:[number, string] = [1, 2]; // Type 'number' is not assignable to type 'string'
console.log(tupleThree);
//let tupleFour:[number, string] = [11, "JS", true] //ype '[number, string, boolean]' is not assignable to type '[number, string]'.
// Source has 3 element(s) but target allows only 2.
// Exception: push(), pop()
var tupleOne = [1, "ts"];
console.log(tupleOne.length); // 2
console.table(tupleOne);
// push()
// tupleOne.push(true); // TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
tupleOne.push("js");
console.table(tupleOne);
console.log(tupleOne.length); // 3


tupleOne.pop();
console.table(tupleOne);
console.log(tupleOne.length);
