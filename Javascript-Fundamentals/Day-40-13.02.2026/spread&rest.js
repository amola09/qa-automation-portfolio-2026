/* 
   ...
    ...objectName/variableName --> spread/rest 

    spread --> separate the values
    input: string, array, object
    output: depends on the separate value

    rest --> combine the values
    input: any random entities
    output: array/object


ES6 feature

*/

let arr = [1, 2, 3, "JS"];
console.log(arr);
// console.table(arr);s

// spread: 
console.log(...arr);

/* 
[ 1, 2, 3, 'JS' ]

1 2 3 JS

*/