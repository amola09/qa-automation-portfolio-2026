/*
# Advance Types in TS:

Generics: Is way of type annotation
 Can type annotation --> multipal places
 Moto : flexible, reusable

*/
// literal type annotation for number
function fun1(para1, para2) {
    //   console.log(para1, para2);
    if (typeof para1 == "number" && typeof para2 == "number") {
        console.log("I am number");
    }
    if (typeof para1 == "string" && typeof para2 == "string") {
        console.log("I am string");
    }
}
fun1(10, 2);
// same
// fun1("Hi", "JS");
// fun1("Hi", 4);
// fun1({}, {});
// Type annotation with the generics for function:
function funOne(para1, para2) {
    //   console.log(para1, para2);
    if (typeof para1 == "number" && typeof para2 == "number") {
        console.log("I am number");
    }
    if (typeof para1 == "string" && typeof para2 == "string") {
        console.log("I am string");
    }
}
funOne(10, 2);
funOne("Hi", "TS");
var obj = {
    key1: "TS",
    key2: 12,
};
var obj2 = {
    key1: true,
    key2: {},
};
