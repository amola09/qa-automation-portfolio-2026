// datatype ---> js
// type > datatype ---> ts
// enum
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
// : 0
console.log(enumOne); // { '0': 'a', '1': 'b', a: 0, b: 1 }
// objName.keyName
console.log(enumOne.a); // 0
//enumOne.a = 20 // Cannot assign to 'a' because it is a read-only property.
(function (enumOne) {
    enumOne[enumOne["x"] = 100] = "x";
    enumOne[enumOne["y"] = 101] = "y";
})(enumOne || (enumOne = {}));
console.log(enumOne); // { '100': 'a', '101': 'b', a: 100, b: 1011 }
// objName.keyName
console.log(enumOne.a); // 100
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color);
console.log(Color.Red);
