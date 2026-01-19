// Default Type:

// Class:

class class1<Type1, Type2 = string> {
  key1: Type1;
  key2!: Type2;

  constructor(para: Type1) {
    this.key1 = para;
  }
}

let obj1: class1<number> = new class1(10);

// Function:

function funOne<type1, type2 = number>(para1: type1, para2: type2) {
  console.log(para1, para2);
}
funOne<number>(10, 10);