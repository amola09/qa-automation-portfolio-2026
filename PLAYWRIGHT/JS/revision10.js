
// Class ---> user defined type

// number
// string
// boolean
// undefined
// null
// NaN
// array
// objects
// set 
// Map

// Class ----->  object ---> properties and method

class Person {
    constructor(fn,ln){
        // property
        this.firstName = fn 
        this.lastName = ln
    }
    displayName(){
        // method
        console.log(this.firstName + this.lastName)
    }

}
let virat = new Person("virat","kohli")
console.log(virat.firstName)
console.log(virat.lastName)
virat.displayName()

let sachin = new Person("sachin",'tendulkar')
sachin.displayName()