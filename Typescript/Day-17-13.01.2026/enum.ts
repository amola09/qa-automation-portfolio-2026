// datatype ---> js
// type > datatype ---> ts
// enum

/* 
enum: enumerated list or unchanged variables list

syntax: enum enumName { const1, const2, ...., constn}

can retrive: enumName.variableName

Note: variables holds const value, cant update it

*/

enum enumOne {
  a,
  b,
}

// : 0

console.log(enumOne); // { '0': 'a', '1': 'b', a: 0, b: 1 }
// objName.keyName
console.log(enumOne.a); // 0

//enumOne.a = 20 // Cannot assign to 'a' because it is a read-only property.

enum enumOne {
  x = 100,
  y,
}

console.log(enumOne); // { '100': 'a', '101': 'b', a: 100, b: 1011 }
// objName.keyName
console.log(enumOne.a); // 100



enum Color {
  Red = "RED",
  Blue = "BLUE",
}

console.log(Color);
console.log(Color.Red);

