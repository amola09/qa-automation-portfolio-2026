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

console.log(enumOne); // { '0': 'a', '1': 'b', a: 0, b: 1 }
// objName.keyName
console.log(enumOne.a); // 0