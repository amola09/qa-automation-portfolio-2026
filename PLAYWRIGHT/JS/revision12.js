// concept ----> class better ---> objects -----> properties and method
// inheritance
// encapsulation
// polymorphism
// abstraction 

// playwright - encapsulation 


// class Student {

//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastname = ln
//     }

//     displayName() {
//         console.log(this.firstName + this.lastname)
//     }

// }


//playwright



// class LoginPage {
//     constructor(page){
//         this.page = page
//         this.username = '#username';
//         this.password = '#password';
//         this.loginBtn = '#loginBtn'
//     }

//     async enterUserPasswordAndLogin(user){
//         await  this.page.fill(this.username,'ram')
//         await  this.page.fill(this.password,'ram')
//         await  this.page.click(this.loginBtn)
//     }

// }

// Inheritance

// class BasePage{
//     constructor(page){
//         this.page = page
//     }
//     async navigate(url){
//         await this.page.goto(url)
//     }
// }

// class LoginPage  extends BasePage{
//     constructor(page){
//         super(page)
//         this.username = '#username';
//         this.password = '#password';
//         this.loginBtn = '#loginBtn'
//     }

//     async enterUserPasswordAndLogin(user){
//         await  this.page.fill(this.username,'ram')
//         await  this.page.fill(this.password,'ram')
//         await  this.page.click(this.loginBtn)
//     }

// }


class Student {

    constructor(fn,ln){
        this.firstname = fn 
        this.lastName = ln
    }
    displayName(){
        this.firstname = fn 
        this.lastName = ln
    }

}