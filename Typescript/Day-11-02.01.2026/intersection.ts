// union (|) --> OR type

// intersection (&): combine types

type objOne = { keyOne: string };

// let obj: objOne = {
//   keyOne: "TS",
// };

// console.log(obj); // { keyOne: 'TS' }

type objTwo = { keyTwo: number };

let obj12: objOne & objTwo = {
  keyOne: "TS",
  keyTwo: 10,
};

console.log(obj12); // { keyOne: 'TS', keyTwo: 10 }

// any, |, &, type



type objThree = {keyOne:string}
type objFour = {keyTwo:number}

let obj11: objThree & objFour ={
    keyOne:"JS",
    keyTwo:12
}
console.log(obj11)