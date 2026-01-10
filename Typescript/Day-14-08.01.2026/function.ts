/* 
function:
Type of function: 3

How we can annotate ?
Annotate with interface ?

function Delaration:

function functionName(para1:type, para2:type, ..., paran:typen): returnType{}

if function retrun type mensioned then must to write return keyword or return value from function
*/

// literal
function funOne(para: number): number {
  console.log("I am funOne");
  return para;
}

// inputs : Parameters types
// output : return type

funOne(4);

/* 
if return type is a void, then cant write return keyword in defination or cant retrun anything
*/

function fun2(para: number): void {
  console.log("I am funOne");
 // return para;
}
fun2(4);