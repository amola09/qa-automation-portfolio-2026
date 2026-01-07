/* 
interface merging: 

If interface declared with same names then at time of implementation need to follow both or same declared interface structures

- its behaves like a intersection(&) type
*/

interface interfaceTwo {
  keyOne: string;
}

interface interfaceTwo {
  keyTwo: boolean;
}

let objTwoInOne: interfaceTwo = {
  keyOne: "Scala",
  keyTwo: false,
};

console.log(objTwoInOne); // { keyOne: 'TS', keyTwo: true }