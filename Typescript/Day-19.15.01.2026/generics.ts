/* 
# Advance Types in TS:

Generics: Is way of type annotation
 Can type annotation --> multipal places
 Moto : flexible, reusable

*/

// literal type annotation for number

function fun1(para1: number | string, para2: number | string): void {
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
function funOne<Type1, Type2>(para1: Type1, para2: Type2): void {
  //   console.log(para1, para2);

  if (typeof para1 == "number" && typeof para2 == "number") {
    console.log("I am number");
  }

  if (typeof para1 == "string" && typeof para2 == "string") {
    console.log("I am string");
  }
}

funOne<number, number>(10, 2);
funOne<string, string>("Hi", "TS");

// Type annotation with the generics for interface:
interface interfaceOne<Type1, Type2> {
  key1: Type1;
  key2: Type2;
}

let obj: interfaceOne<string, number> = {
  key1: "TS",
  key2: 12,
};

let obj2: interfaceOne<boolean, object> = {
  key1: true,
  key2: {},
};