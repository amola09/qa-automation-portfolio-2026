let x = 10; let y = 10;
console.log(x + y) // 20 // Addition operation

// LHS operator RHS --> operation with 2 operands (Hence + is a binary operator)

// 10, 10 --> values
// variables: operand means a ,a
// + : operator : addition operator
// 10 + 10 --> operation

/* ** Types of operators:
1. Unary operators: +, ++, -- (Pre, post)
2. Binary operators:
    1. Arithmetic Operators:+,-,*,/,**,%
    2. Assignment Operators: =, +=, -=, *=, /=, %=, **= (short hand methods)
    3. Comparison Operators: <, >, <=, >=, ==, ===, !=, !==
    4. Logical Operators: &&, ||, !
    5. Bitwise Operators.
    6. Miscellaneous Operators:, typeof, instanceof, void() --> Explain->;
3. Ternary operators: 
    1. conditional operator.
*/

/* 
1. Unary operators: +, ++, -- (Pre, post) : means using single operand with operators

+ addition operator

++ Incremental operator (increse by 1)
-- decremental operator (decrease by 1)

Pre-Increment, Post-Increment
Pre-decrement, Post-decrement
*/

let t = 10;
console.log(t++); // 10 // Post increment
console.log(t); //  11

/*
js synch execution: Code executing line by line

line 1
.
.
.
line END

And on the each line code executing 
LHS ---> RHS

as like book reading

*/

let add = 20;
console.log(++add); // 21 // Pre increment
console.log(add); //  21

// Assignment: Check same for decremental operator

/* 
** datatypes:

1 ... n
0 
-1 .... -n

datatype: number

'a'
"a"
`a` (backtics)

datatype: string
*/


// +

console.log(10 + 10) // 20
// Use single operand:

// unary + operator converting string datatype to number datatype

let a = "10";
// 10 --> value
// string --> datatype

console.log(typeof a); // string

let aa = +a
console.log(aa); // 10
console.log(typeof aa); // number

