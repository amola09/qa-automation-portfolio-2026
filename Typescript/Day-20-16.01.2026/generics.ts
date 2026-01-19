// Type annotation with the generics for class:

// literal Type annotation:
// class classOne<Type1, Type2> {
//   key1: Type1;
//   constructor(para: Type1) {
//     this.key1 = para;
//   }
//   key2(): Type2 {
//     // console.log("I am key2");
//     return "TS" as Type2;
//     // return <Type2>"TS";
//   }
// }

// let obj: classOne<number, void> = new classOne(10);

// // intrface Type annotation:
// interface interfaceOne<Type1, Type2> {
//   key1: Type1;
//   key2(): Type2;
// }

// class classOne implements interfaceOne<number, string> {
//   key1 = 10;
//   key2() {
//     // console.log("I am key2");
//     return "TS";

//     // return 10;

//     /*
//     Property 'key2' in type 'classOne' is not assignable to the same property in base type 'interfaceOne<number, string>'.
//   Type '() => 10 | "TS"' is not assignable to type '() => string'.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.ts(2416)

//     */
//   }
// }