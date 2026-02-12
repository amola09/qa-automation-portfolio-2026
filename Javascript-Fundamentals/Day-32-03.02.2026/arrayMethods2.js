/* 
        push(...items) :
         Action : items adding at end of array
         Return : new array length

        pop() :
         Action : removing array last element
         Return : poped element

        shift() :
         Action : removing array first element
         Return : shifted out element

        unshift(...items) :
         Action : items adding at start of array
         Return : new array length

        splice(pos, deleteCount, ...items) 
         Action : Adding/replacing/deleting elements according to passed arguments
         Return : array (removed element array)

*/

let arr = [1, 5, "Hi"]


// push(...items)
// Action
// Return: array new length

// function push (para){
//     return -->
// }

console.log(arr.push(true)) // 4
console.log(arr.push(true, 10)) // 6
console.table(arr) //[ 1, 5, 'Hi', true, true, 10 ]


//  pop() 

//
// Return: Deleted value
console.log(arr.pop())
console.table(arr)


//   shift() 
//
// Return: Deleted value
console.log(arr.shift())
console.table(arr)

// unshift(...items) 
console.log(arr.unshift(100)) // 5
console.table(arr)

// splice(pos, deleteCount, ...items) 

// arr.splice(2, 0, "JS")
arr.splice(2, 1, "JS")
console.table(arr)