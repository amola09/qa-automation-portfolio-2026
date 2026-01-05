// any type: any type (all types)
// unknown: Not known type
// Diff bt any & unknown ?
var varOne = 10;
var varNum = 20;
console.log(varOne + varNum); // No error
var varTwo = 50; //  Operator '+' cannot be applied to types 'number' and 'unknown'.
// console.log(varNum + varTwo); // Error: Object is of type 'unknown'.// Error: Object is of type 'unknown'.
if (typeof varTwo === "number") {
    console.log(varNum + varTwo); // 70
}
// NOTE:
/*
- Any holding any type and can able to do any operations with it.
- Unknow can hold any type. But any time of operations need to check type check then only can able to do operations with unknown
*/ 
