/* 
syntax:
function declaration:
function functionName(parameters) {
            function code --> function defination
} --> function block

function calling step:
 functionName(arguments);

*/

function fun() {
    console.log("I am function");
}

// call function to execute the function block code
fun() // I am function

function cal(){
    console.log(8+8)
}
cal()


// scope -

// var, let , const

// var variable scope --> Global, Function
// let variable scope--> Global, Function, Block
// const variable scope --> Global, Function, Block


/* {
     {
        var/let/const 
         {

           {  {

               } }
         }

       }
} */