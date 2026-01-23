/* 
Utility Types: `Required`
All properties/structure are mandatory
*/

interface interfaceOne {
  key1: number;
  key2: string;
}

let objectOne: Required<interfaceOne> = {
  key1: 10,
   key2: "TS",
};

console.log(objectOne);

// Think ?
// Default

interface interfaceTwo{
  key1:number
  key2:null
}
let obj2: Required<interfaceTwo>={
  key1:10,
  key2:null
}
console.log(obj2)