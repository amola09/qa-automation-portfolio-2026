/* ------------------------------------------------------------
# Higher-order function : 
-A function can be called as a Higher-order if that function has either of the below 2 abilities:
  1. a function has ability to return another function.
  2. a function has ability to take another function as argument.
-E.g. Array methods like filter(),map(),reduce(),sort(),  decribe("", () => { }); it("", function () { });


---------------------------
# callback functions:
      Writing or taking one function as parameter to another function is called call back function

The function which is taking is called Higher order function.
The function which is in parameter is called callback function.  
*/

let fun = function () {
    console.log("I am fun")
};

function fun2(para) {
    console.log(para)
};

// fun2("Hi")
fun2(fun)
// Arug: string, number, boolean , But if arug is a function then,

/*
fun2 : Higher order function
fun : callback function
*/

let arr = [];
arr.map(() => { })
arr.map(function () { })

/*
map : Higher order function
()=>{} or  function(){} : callback function
*/