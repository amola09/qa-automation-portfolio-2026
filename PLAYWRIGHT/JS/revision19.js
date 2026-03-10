let pro = new Promise(function (resolve, reject) {
    let a = 10
    let b = 10
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }

})

pro.then(function (str) {
    console.log(str)
}), function (str) {
    console.log(str)
}

pro.then(function (str) {
    console.log(str)
})
    .catch(function (str) {
        console.log(str)
    })
pro.then(function (str) {
    console.log(str)
})
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log("I will always execute")
    })

pro.then(function (str) {
    console.log(str)
    return "Hello JS"
})
    .then(function (str) {
        console.log(str)
        return "Hello TS"
    })
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function (str) {
        console.log(str)
    })

// function getInfo() {
//     setTimeout(function () {
//         console.log("User created")
//     }, 3000);
//     setTimeout(function () {
//         console.log("Get ID")
//     }, 2000);
//     setTimeout(function () {
//         console.log("Get Info")
//     }, 1000);
// }

// call back Hell

function getInfo() {
    setTimeout(function () {
        console.log("user created")
        setTimeout(function () {
            console.log("get id")
            setTimeout(function () {
                console.log("get info")
            },1000)
        }, 2000)

    }, 3000)
}
getInfo()


function createUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function()  {
            resolve("user created")
        },3000);
    })
}


function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function()  {
            resolve("get ID")
        },2000);
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function()  {
            resolve("Get Info")
        },1000);
    })
}

async function getUserInfo() {
    try{
        let str1 = await createUser()
        console.log(str1)
        let str2 = await getId()
         console.log(str2)
        let str3 = await getInfo()
         console.log(str3)
    }
    catch{
        console.log("I will execute")
    }
    
}
getUserInfo()


.then(function(str){
    console.log(str)
    return getId
})
.then(function(str){
    console.log(str)
    return getInfo
})
.then(function(str){
    console.log(str)
    
})
.catch(function(){
    console.log("Error")
})
.finally(function(){
    console.log("I will always Execute")
})