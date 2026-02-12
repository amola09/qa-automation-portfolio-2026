/* 
    * Functional methods:
        map(func) – 
            Action : Iterate/operation on the each element (as per the function defination)
            Return : New array

        flatMap(func) - flat()+map()
            Action : Iterate/operation on the each element (as per the function defination)
            Return : New array

*/

/* 
  * To iterate over elements:        
        forEach(func):
            Action : Iterate/operation on the each element
            Return : undefined
*/

let arr = [1, 2, 3, 4, 5, 6, 7]
//         0  1  2  3  4  5  6

let outPut = arr.forEach(function (ele, ind, arr) {
    console.log(ele);
    console.log(ind);
    console.log(arr);
    // return arr
})
console.log(outPut); // undefined

/*
        map(func) –
            Action : Iterate/operation on the each element (as per the function defination)
            Return : New array

*/

let outPut1 = arr.map(function (ele, ind, arr) {
    console.log(ele); // [ undefined, undefined, undefined, undefined, undefined ]
    //return ele // [ 1, 2, 3, 4, 5 ]
    //return ele * (ind) //  [ 0, 2, 6, 12, 20 ]
    console.log(ind);
    console.log(arr);
})
// console.log(outPut1);


// flat() --> 2D --> 1D
// map()
// flatMap = flat() + Map()
// arr.flatMap()

let nestedArr = [1, [2, 3], 4, [5, 6]]

nestedArr.map(function (ele, ind, arr) {
    console.log(ele)
})