/* 
lexical scope, closure

*/

// Parent/outer funtion
function funOne() {
    console.log("I am funOne")
    let a = 1

    // Child/Inner funtion
    function funTwo() {
        console.log("I am funTwo")
    }
    funTwo()
}

funOne()