/*
Utility Types: `Partial`, `Required`, `Readonly`
*/
/* 
Utility Types: `Readonly`
Can only access the properties. Not able to update it
*/

interface interfaceOne {
  key1: number;
  key2: string;
}

let obj: Readonly<interfaceOne> = {
  key1: 10,
  key2: "TS",
};

console.log(obj);
// obj.key1 = 100; //  TS2540: Cannot assign to 'key1' because it is a read-only property.

console.log(obj);