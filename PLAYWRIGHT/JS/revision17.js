// ajax

function addA() {
    console.log('A is called')
}
function addB() {
    console.log("B is called")
}
addB()
addA()

// sync ---> async
function addC() {
    setTimeout(function () {
        console.log("C is called")
    }, 3000)
}
function addD() {
    console.log("D is called")
}
//addC()
//addD()

//                1        2        3    
// case 1 - sync fA   ---> fB   --> fC  ---> execution time --> 6 seconds
// case 2 - async                       ---> executuon time --> 3 seconds

// userCreate  ----> userId  ----> userInfo

function getInfo() {

    setTimeout(function () {
        console.log("User created")
    }, 3000)

    setTimeout(function () {
        console.log("User Id")
    }, 2000)

    setTimeout(function () {
        console.log("User Info")
    }, 1000)

}
//getInfo()

// async  ----> sync
// call back hell
function getInfo() {
    setTimeout(function () {
        console.log("User created")
        setTimeout(function () {
            console.log("User Id")
            setTimeout(function () {
                console.log("User Info")
            }, 1000)
        }, 2000)

    }, 3000)

}
getInfo()

// Promises --> async --- sync without call back hell