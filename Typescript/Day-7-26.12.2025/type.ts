/* 

any, undefined, null, never, unknown, void

undefined: A variable that has been declared but not assigned a value. It represents the absence of a value.

null: A value that explicitly represents the absence of a value.

never: A type that represents a value that never occurs. It is used for functions that never return.

unknown: A type that represents any value. It is the most general type in TypeScript.

void: A type that represents the absence of a return value. It is used for functions that do not return anything.

*/

/* 
Syntax:

function functionName(): returnType 
{

};
*/

// function throwErr(message: string): never {
//     throw new Error(message);
//  // return message;
// }
// throwErr("This is an error message - never");

// function throwError1(message: string): never {
//   throw new Error(message);
// }
// throwError1("This is an error message - never")


// function throwError2(message: string): void {
//     console.log(message); // not returning anything
//   //   return message; // returning message
//   //  error TS2322: Type 'string' is not assignable to type 'void'.
// }
// let msg = throwError2("This is an error message - void");
// console.log(msg);


// function throwError(message: string): string {
//   // console.log(message); // not returning anything
//   return message; // returning message
//   //  error TS2322: Type 'string' is not assignable to type 'void'.
// }
// let msg2 = throwError("This is an error message - String");
// console.log(msg2);



// // unknown type:
// // let userName: any;
// let userInput: unknown = true;
// console.log(userInput);