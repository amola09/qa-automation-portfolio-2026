// same class same method name different signature - overloading
// different same method name , same signature - overriding
// duck typing 

// poly  - many  morphism --- forms  --- of same thing

// overloading 

class Calculator {

    // addition(x,y){
    //     console.log(x+y)
    // }
    // addition(x,y,z){
    //     console.log(x+y+z)
    // }
    // addition(x,y,z,a){
    //     console.log(x+y+z+a)
     


      addition(x = undefined, y = undefined, z = undefined, a = undefined) {
        if (x != undefined && y != undefined && z != undefined && a != undefined) {
            console.log(x + y + z + a)
        }
        else if (x != undefined && y != undefined && z != undefined) {
            console.log(x + y + z)
        }
        else if (x != undefined && y != undefined) {
            console.log(x + y)
        }
    }

}
let q1 = new Calculator()
q1.addition(12, 3)
q1.addition(12, 3, 3)
q1.addition(12, 3, 3, 4)


// override 

class WorldBank {
    save(){
        console.log("I am dave from world bank")
    }
    loan(){
        console.log("I am loan from world bank")
    }
}

class SBI extends WorldBank {
    bankName(){
        console.log("I am SBI bank")
    }

    save(){
        console.log("I am save from SBI")
    }
    loan(){
        console.log("I am loan from SBI")
    }
}

let sbi  = new SBI()
sbi.loan()
sbi.save()

// Duck typing 

class Human {
    talk(){
        console.log("hi hello")
    }

}
class Duck {
    talk(){
        console.log("quack")
    }
}

class Dog{
    talk(){
        console.log("Bow Bow")
    }
}

function call_talk(obj){
    obj.talk()
}

let a = new Human()
let b = new Duck()
let c = new Dog()

call_talk(a)
call_talk(b)
call_talk(c)