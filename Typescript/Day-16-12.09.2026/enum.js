/*
enum: enumerated list or unchanged variables list

syntax: enum enumName { const1, const2, ...., constn}

can retrive: enumName.variableName

Note: variables holds const value, cant update it

*/
var enumOne;
(function (enumOne) {
    enumOne[enumOne["a"] = 0] = "a";
    enumOne[enumOne["b"] = 1] = "b";
})(enumOne || (enumOne = {}));
console.log(enumOne); // { '0': 'a', '1': 'b', a: 0, b: 1 }
// objName.keyName
console.log(enumOne.a); // 0
