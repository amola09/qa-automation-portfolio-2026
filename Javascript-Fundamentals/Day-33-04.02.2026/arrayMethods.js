/* 
        splice(pos, deleteCount, ...items) 
         Action : Adding/replacing/deleting elements according to passed arguments
         Return : array (removed element array)

        slice(startIndex, endIndex(Excluding)) :
         Action : slicing/cuting array part according to passed index
         Return : new sliced array

        concat(...items) :
         Action : Adding items in array(items: array, string, number, ...)
         Return : new array
        
        flat() :
         Action : converting 2D array in 1D
         Return : new array

        reverse() :
         Action : reversing array
         Return : reversed array

        copyWithin(copyPointIndex, copyStartIndex, copyEndIndex):
            Action : copying value within it in same length
            Return : base updated array

*/

let arr = [1, 5, "Hi"]
//         0  1    2

// splice(pos, deleteCount, ...items) 

// arr.splice(3, 0, "JS")
// arr.splice(3, 0, "JS", "TS")
// arr.splice(3, 1, "JS", "TS")
// arr.splice(2, 1, "JS", "TS")
// console.table(arr)

// slice(startIndex, endIndex(Excluding))
// console.log(arr.slice(1, 2)) // [ 5 ]
// console.log(arr.slice(1, 3)) // [ 5, 'Hi' ]
// console.log(arr.slice()) // [ 1, 5, 'Hi' ]
// console.log(arr.slice(1)) // [ 5, 'Hi' ]
// console.log(arr) // [ 1, 5, 'Hi' ]

// concat(...items)     
let arr2 = [1, 2, 3, 4]
// let newArr = arr2.concat("Hi", "Js")
// console.log(newArr); // [ 1, 2, 3, 4, 'Hi', 'Js' ]
// console.log(arr2); // [ 1, 2, 3, 4 ]

// flat() 
// 2D array
let arr2D = [1, 2, [3, 4], 5, [6, 7]]
// console.table(arr2D.flat())
// console.table(arr2D)

// reverse() 
// arr = [1, 5, "Hi"]
// console.log(arr.reverse()) // [ 'Hi', 5, 1 ]

let reversedStr = "str".split("").reverse().join("");
// console.log(reversedStr); // rts

//  copyWithin(copyPointIndex, copyStartIndex, copyEndIndex);
/* 
copyPointIndex:	Index where copied elements will be placed
copyStartIndex:	Index to start copying from
copyEndIndex (optional):  Index to stop copying (not included)

Does not change array length
*/

arr = [1, 5, "Hi", "JS", "TS"]

// console.table(arr.copyWithin(1, 2, 3)) // [1, "Hi", "Hi", "JS", "TS"]
// console.table(arr.copyWithin(1, 2)) // [1, "Hi", "JS", "TS"]
// console.log(arr)

/* 
    * search value:
         at(index):
            Action : value retrive
            Return : array vale

        indexOf(value, index(startPoint)):
            Action : searching first occurance value index
            Return : number
*/

console.log(arr.at(0))

arr = [1, 5, "Hi", "JS", "TS", "Hi"]

console.log(arr.indexOf(5)) // 1
console.log(arr.indexOf("JS")) // 3
console.log(arr.indexOf("Js")) // -1
console.log(arr.indexOf("Hi")) // 