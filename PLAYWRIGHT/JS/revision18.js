// function additionA(){
//     console.log("A is called")
// }
// function additionB(){
//     console.log("B is called")
// }
// additionB()
// additionA()

// function additionC(){
//     setTimeout(function(){
//         console.log("C is called")
//     },2000)

// }
// function additionD(){
//     setTimeout(function(){
//         console.log("D is called")
//     },1000)

// }
// additionC()
// additionD()

// userCreate ---> getId ----> getInfo
function getInfo() {

    setTimeout(function () {
        console.log("user create")
    }, 3000)

    setTimeout(function () {
        console.log("getId")
    }, 2000)

    setTimeout(function () {
        console.log("getInfo")
    }, 1000)

}
//getInfo()

function getInfo() {
    setTimeout(function () {
        console.log("user create")
        setTimeout(function () {
            console.log("getId")
            setTimeout(function () {
                console.log("getInfo")
            }, 1000)
        }, 2000)

    }, 3000)
}
//getInfo()


// async --- sync -- without call back hell --- promises
// promise ---> 
// mahesh - 2000 ,  2month - pending -- 2k given resolve  2k - reject

let proOne = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello i am success")
    }
    else {
        reject("hello i am fail")
    }
})
// consuming the promise

// proOne
// .then(function(a){
//     console.log(a)
// },function(b){
//     console.log(b)
// })

// proOne
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })

// proOne
// .then(function(a){
//     console.log(a)
// })
// .catch(function(b){
//     console.log(b)
// })
// .finally(function(){
//     console.log("i will always execute")
// })


proOne
.then(function(a){
    console.log(a)
    return "success-1"
})
.then(function(b){
    console.log(b)
    return "success-2"
})
.then(function(c){
    console.log(c)
})
.catch(function(a){
    cosnole.log(a)
})
.finally(function(){
    console.log("i will always execute")
})


console.log("----------------------------")

// function additionV(){
//  console.log(4+4)
// }
// function additionW(){
//  console.log(5+5)
// }
// additionV()
// additionW()

// function additionX(){
//     setTimeout(function()  {
//        console.log(9+9) 
//     }, 3000);
// }
// function additionY(){
//     console.log(2+2)
// }
// additionX()
// additionY()


// get information function  have settimeout function with time in seconds
// to get output in sequence
function getInformation(){
    setTimeout(function(){
        console.log("User created")
    },3000)
    setTimeout(function() {
        console.log("get ID")
    },2000);
    setTimeout(function(){
        console.log("Get Info")
    },1000)
}
// getInformation()

// in above function we need sequence-->user created --> get ID --> then get Info
// to solve above problem JS introduced ---->call back hell
function getInfo2(){
    setTimeout(function(){
        console.log("User Created")
        setTimeout(function(){
            console.log("get ID")
            setTimeout(function(){
                console.log("get Info")
            },1000)
        },2000)
    },3000)
}
// getInfo2()


// in above code we solved our problem but code is tightly coupled and not reusable
// in order to solve our problem Promises are introduced

let pro2 = new Promise(function(resolve,reject){
    let c = 10
    let d = 10
    if(c === d){
        resolve("c is equal to d")
    }
    else{
       reject("c is not equal to d")
    }
})

// consuming promise with .then and catch error in function
// pro2.then(function(str){
//     console.log(str)
// }),function(str){
//     console.log(str)
// }

// consuming promise  with .then and catch
// pro2.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//   console.log(str)
// })

// consuming promise with .then,catch,finally
// pro2.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// .finally(function(){
//     console.log("I will execute always")
// })

pro2.then(function(s){
    console.log(s)
    return "success-3"
})
.then(function(t){
    console.log(t)
    return "success-4"
})
.then(function(u){
    console.log(u)
})
.catch(function(s){
    console.log(s)
})
.finally(function(){
    console.log("always excute")
})