class Student {
    constructor(fn,ln,ag){
        // property
        this.firstName = fn
        this.lastName = ln
        this.age = ag
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let s1 = new Student("amol","rao",13)
let s2 = new Student("amol","rao",13)
let s3 = new Student("amol","rao",13)
// "skill":"playwright"
console.log(s1)
console.log(s2)
console.log(s3)

let students = [s1,s2,s3]
console.log(students)
students.forEach(function(el){
    el['skill'] = "playwright"
})
console.log(students)

console.log("-----------------------------------")


class student1{
     constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
     }   
     displayName1(){
        console.log(this.firstName + this.lastName)
     } 
}
let stud1 = new student1("Amol","Jadhav",25)
let stud2 = new student1("Amar","Mane",27)
let stud3 = new student1("Saachin","Khamitar",26)
console.log(stud1)
console.log(stud2)
console.log(stud3)


let studentsA = [stud1,stud2,stud3]
console.log(studentsA)

studentsA.forEach(function(el){
      el['skill'] = "Playwright"
})

console.log(studentsA)