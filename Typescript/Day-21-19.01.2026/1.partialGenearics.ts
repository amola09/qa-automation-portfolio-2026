/* 
Utility Types: `Partial`
All properties are optional. Structure is flexible
*/

interface interfaceOne {
  key1: number;
  key2: string;
}

let obj: Partial<interfaceOne> = {
  key1: 10,
  //   key2: "TS",
};

console.log(obj);

interface interfaceTwo{
  key1:string
  //key2:boolean
}
let obj1:Partial<interfaceTwo>={
 key1:"JS"
}
console.log(obj1)