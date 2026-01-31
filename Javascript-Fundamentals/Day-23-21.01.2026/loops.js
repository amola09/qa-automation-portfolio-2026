/* 
  2. loops: while, do-while, for, for-in, for-of

  loop: repeat executing block of code  

  A. Entry control loops: for, while
  B. Exit control loops: do-while


  1. while loop:

    syntax:
        while(condition){
            code block to be executed
        }

*/
// Program: 1
// while (false) {
//     console.log("Inside while loop");
// }                         

// if condition is false inside block not execute


// Program: 2
// while (true) {
//     console.log("Inside while loop");
// }
// if condition is not false the code will stuck in infinite loop


// Program: 3
let flag = true;

while (flag) {
    console.log("Inside while loop");
    flag = false;
}
// if the condition is true it needs to be false or it stuck in infinite loop

/* 
Inside while loop
*/


/* 
  2. do-while loop: Exit control loop

  syntax:
        do{
            code block to be executed
        }while(condition)

*/

// Program: 4
do {
    console.log("Inside do-while loop");
} while (false);

// Program: 5
// do {
//     console.log("Inside do-while loop");
// } while (true);

// in above code condition is always true it will stuck inside infinite loop