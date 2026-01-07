// object literal type:

let obj13: { keyName: boolean } = {
  keyName: true,
};
console.log(obj13);

// type alias or custom type

/* type typeName = type */

type objType = { keyName: boolean };

let obj15: objType = {
  keyName: true,
};
console.log(obj15);

type arrType = string | number;

// let a: arrType = 10;
// let a: arrType = true; // error TS2322: Type 'boolean' is not assignable to type 'arrType'.



let obj10:{keyname:boolean} = {
   keyname:true   
}
console.log(obj10)

type objT = {keyName:number}

let obj9:objT = {
    keyName:10
} 
console.log(obj9)