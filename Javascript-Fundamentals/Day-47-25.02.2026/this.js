/*
Q. what is 'this'?
   - js reserved keyword or variable
   - 'this' always containing dynamic value which is object
   - 'this' is a object (Dynamic object)
   - which object ?
    - containing dynamic value/object according to its scope:
      1. In script & functions : this ==> window 
      2. In method  : this ==> owner object
          Depends on function type and its nested structure
      3. In constructor : this ==> new instance.

# this scope depends on function type and its nested structure :
  # Type of function:
   1. Normal function : (function declaration & expression)
    - 'this' value is dynamic
    - Depends on how/where the function is called

   2. Arrow function :
    - 'this' value is static
    - Depends on the where the function is declared/written
    - Enclosing lexical context/scope        

*/

// window 
//     script scope

// function:
function funOne() {
    console.log("funOne", this); // window
};
funOne();

let funOne2 = function () {
    console.log("funOne2", this); // window
};
funOne2();

let funOne3 = () => {
    console.log("funOne3", this); // {} --> script scope
};
funOne3();

// method:

let obj = {
    key: "I am Obj",
    key2: function () {
        console.log("Key2", this); // obj
    },
    key3: () => {
        console.log("Key3", this); // window
    },
    key4: function () {
        console.log("Key4", this); // obj
        let innerFun = () => {
            console.log("Key5", this); // obj
        };
        innerFun();
    }

};
// obj.key2();
// obj.key3();
obj.key4();

/* 
()=> --> static
*/


/* 
OuterFunction(){
let a = 10;
    InnerFunction(){
        console.log(a) // lexical scope
    }
}
*/
console.log("-----------------------------------")
let object1 = {
  key1:function(){
    console.log("I am key1",this)
  },
  key2: () =>{
    console.log("i am key2",this)
  },
  key3:function(){
     console.log("I am key3",this)
     let inFun = ()=>{
        console.log("i am innerfun",this)
     }
     inFun()
  }

}
object1.key1()
object1.key2()
object1.key3()