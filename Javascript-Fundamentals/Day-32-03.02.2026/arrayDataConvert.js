/* 
    * Datatype conversion:
            split/join – convert a string to array and back.

*/

/* 
split(splitter):

*/
console.log("JavaScript".split()) // [ 'JavaScript' ]

let splitArr = "JavaScript".split("")

console.log(splitArr)
console.log(typeof splitArr) // object
/* 

[
  'J', 'a', 'v', 'a',
  'S', 'c', 'r', 'i',
  'p', 't'
]


join(joiner):
    Action : joining the array values by using joiner
    Return : string
*/

console.log(splitArr.join()) // J,a,v,a,S,c,r,i,p,t
console.log(splitArr.join("")) // JavaScript
console.log(typeof splitArr.join()) // string