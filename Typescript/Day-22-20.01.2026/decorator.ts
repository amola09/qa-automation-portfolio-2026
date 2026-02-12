/* 
- What Are Decorators?
    Decorators is a special function which can modify :
    class, property, methods, arug

- Enabling Decorators via `tsconfig.json`
    "experimentalDecorators": true

- Types of Decorators:
  - Class
  - Property
  - Method
  - Parameter

Because you can:
✔ Store metadata about it
✔ Modify how it behaves later (getter/setter)
✔ Apply validation, transformation, logging

*/

// 1. Class Decorator: applied on the class

function classDecorator(para1: Function) {
  console.log(para1);
//   console.log(para1.name);
}

/* 
  Class decorator apply syntax:
      @functionName
      @decoratorName
*/

@classDecorator
class classOne {
  key1: number;
  constructor(para: number) {
    this.key1 = para;
  }
  methodOne() {
    console.log("Hi I am method");
  }
}

// at time of class declaration decorators are called and passed the class constructor function as argument
// but class is not yet instantiated
// so we can modify the class behavior here
// class --> object --> use

// 2. Property Decorator:

function propertyDecorator(para1: any, para2: ClassFieldDecoratorContext) {
  console.log(para1);
  console.log(para2);
}

class classTwo {
 @propertyDecorator
  key1: number;
  constructor(para: number) {
    this.key1 = para;
  }
  methodOne() {
    console.log("Hi I am method");
  }
}

// 3. Method Decorator:

function methodDecorator(para1: Function, para2: ClassMethodDecoratorContext) {
  console.log(para1);
  console.log(para2);
}
//   /*
// [Function (anonymous)]
// {
//   kind: 'method',
//   name: 'methodOne',
//   static: false,
//   private: false,
//   access: { has: [Function: has], get: [Function: get] },
//   metadata: undefined,
//   addInitializer: [Function (anonymous)]
// }
// */
// }

class classThree {
  key1: number;
  constructor(para: number) {
    this.key1 = para;
  }
  @methodDecorator
  methodOne() {
    console.log("Hi I am method");
  }
}

// 4. parameter Decorator:

// function parameterDecorator(para1: any, para2: string) {
//   console.log(para1);
//   console.log(para2);
// }

// class classFour {
//   key1: number;
//   constructor(@parameterDecorator para: number) {
//     this.key1 = para;
//   }

//   methodOne( para: boolean) {
//     console.log("Hi I am method");
//   }
// }




