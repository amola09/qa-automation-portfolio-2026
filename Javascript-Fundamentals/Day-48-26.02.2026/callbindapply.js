/* 
# Object constructor methods :
Action : calling the required function/method(with its parameters) with required this value

    1. call() : functionName.call(thisValue, arg1, arg2, ...); 
    Return : depends on function working

    2. bind() : functionName.bind(thisValue, arg1, arg2, ...);
    Return : new function

    3. apply() : functionName.apply(thisValue, [arg1, arg2, ...]);
    Return : depends on function working 
*/

function funOne(a, b) {
    console.log(a, typeof a)
    console.log(b, typeof b)
    console.log(this, typeof this)
    console.log(this.key)
}

let obj1 = {
    key: "JS"
}

let obj2 = {
    key: "TS"
}

// call, bind, apply:

funOne.call(obj1); 
funOne.call(obj1, 10, 20);


let fun = funOne.bind(obj1, 10, 20);
fun();

//funOne.apply(obj1, 10, 20);
//TypeError: CreateListFromArrayLike called on non-object