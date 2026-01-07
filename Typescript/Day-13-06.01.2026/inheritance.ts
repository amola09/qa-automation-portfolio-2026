// inheritance in interface

// class inheritance in js

// parent class ---> child class
// parent interface ---> child interface

interface structureZero {
  keyZero: boolean;
}

interface structureOne {
  keyOne: string;
}

interface structureTwo extends structureOne, structureZero {
  keyTwo: number;
}

let obj2: structureTwo = {
  keyTwo: 10,
  keyOne: "Hi",
  keyZero: true,
};

/* 
# Multilevel

      parent
        |
      Child
        |
      GChild



# Multipal inheritance

      parent
        |
      Child1, Child2
*/