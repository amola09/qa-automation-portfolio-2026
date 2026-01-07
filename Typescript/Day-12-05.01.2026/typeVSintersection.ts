// type or custom type:

type typeOne = {
  keyOne: string;
};

/* 
Compare type syntax with variable declaration and initialization any value

let variableName = anyValue;
*/

// let objB1: typeOne = {
//   keyOne: "JS",
// };

// console.log(objB1);

// --------------

/* 
interface:

  what is interface ?
      An interface is a TypeScript structure used to define the shape of an object.
      object means --> object, class, function


syntax: 

    interface interfaceName {
        keyName: type
    }
*/

interface interfaceOne {
  keyOne: string;
}

/* 
interface syntax comapire with class syntax:

      class className {
          key = value
        } 

 interface used to define structure of object , classes and function
*/

// let objA1: interfaceOne = {
//   keyOne: "TS",
// };
// console.log(objA1);


/* 
type vs interface :

# type:
  - type literal no for class, only type annotate in class defination
  - used for specific primitive datatype
  - Can able to do Intersection(&), Union(|)

==========================================

# interface:
  - defining structure for object, function, class
  - used for specific non-primitive datatype
  - can able to do extends, merging, add modifiers & indexing

*/