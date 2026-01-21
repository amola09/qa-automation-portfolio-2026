
// //1. literal:

// class classOnee {
//   nameZ: string;
//   age: number;
//   constructor(para1: string, para2: number) {
//     this.nameZ = para1;
//     this.age = para2;
//   }
//   printMethod(): void {
//     console.log(this.nameZ);
//   }
// }
//  let objk = new classOnee("TS", 10);

// console.log(objk);
// objk.printMethod();


// // 2. Type alise/custom type

// type classType = {
//   namee: string;
//   age: number;
//   printMethod(): void;
// };

// class classTwo implements classType {
//   namee;
//   age;
//   constructor(para3, para4) {
//     this.namee = para3;
//     this.age = para4;
//   }
//   printMethod() {
//     console.log(this.namee);
//   }
// }

// let objO = new classTwo("TS", 10);

// console.log(objO);
// objO.printMethod();


// 3. Interface for class:

// Type alise/custom type

interface classInterface {
  namee: string;
  age: number;
  printMethod(): void;
}

interface interface2 {}
// can implements multipal interface with the comma

class classOne implements classInterface, interface2 {
  namee;
  age;
  constructor(para5, para6) {
    this.namee = para5;
    this.age = para6;
  }
  printMethod() {
    console.log(this.namee);
  }
}

let objl = new classOne("JS", 10);

console.log(objl);
objl.printMethod();