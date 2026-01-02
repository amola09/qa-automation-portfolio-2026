/*
# Types in TypeScript:
    1. Primitive(immutable): string, number, boolean, undefined, null, never, unknown, void
    2. Special datatype: any
    3. Non-Primitive(mutable, user defined): array, object, class, function, tuple, enum, interface
 */

// Type inferance:
// when we declare and assign a value to a variable at the same time, TS infers datatype automatically    

let z = "Hi";
//p = 10; // error TS2322: Type 'number' is not assignable to type 'string'.
console.log(z);
// inferance
// infert

// Type Annotation: 
// when we explicitly specify datatype to a variable
// useful when we declare variable without assigning value
// syntax:  let/var/const variableName: datatype = value;

let q: boolean = true;

// boolean is a type. Type always in a small case

// datatype:
// TS types directly proportional to JS datatypes