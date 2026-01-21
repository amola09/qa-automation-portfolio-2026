/* 
For a Multipal condition check we can use switch case
instead of if..else if..else
it is more readable and easy to debug
it is used when we have a fixed number of options to choose from
it is used when we have to compare the same variable with different values
break statement is used to exit the switch case
if all cases are not matched then default case is executed

synatx:

switch(){
    case value1:case code block
    break;
    case value2:ase code block
    break;
    .
    .
    .
    default: code block
}
        
*/


// switch (2){
//     case 1: console.log("I am case 1");
//         break;
//     case 2: console.log("I am case 2");
//         break;
//     case 3: console.log("I am case 3");
//         break;
//     default: console.log("I am default case");
// }
/* 
"I am case 2"
*/

switch (2) {
    case 1: console.log("I am case 1");
        break;
    case 2: console.log("I am case 2");
    case 3: console.log("I am case 3");
    default: console.log("I am default case");
}
/*
I am case 2
I am case 3
I am default case
*/


switch (1,2,3) {
    case 1: console.log("I am case 1");
        break;
    case 2: console.log("I am case 2");
        break;
    case 3: console.log("I am case 3");
        break;
    default: console.log("I am default case");
}

/* 
"I am default case"
*/