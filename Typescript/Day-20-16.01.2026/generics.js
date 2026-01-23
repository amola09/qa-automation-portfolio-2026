// Type annotation with the generics for class:
// literal Type annotation:
var classOne = /** @class */ (function () {
    function classOne(para) {
        this.key1 = para;
    }
    classOne.prototype.key2 = function () {
        console.log("I am key2");
        return "TS";
        //return <Type2>"TS";
    };
    return classOne;
}());
var obj = new classOne(10);
console.log(obj);
var classTwo = /** @class */ (function () {
    function classTwo() {
        this.key1 = 10;
    }
    classTwo.prototype.key2 = function () {
        console.log("I am key2");
        return "TS";
        //return 10;
    };
    return classTwo;
}());
//     /*
//     Property 'key2' in type 'classOne' is not assignable to the same property in base type 'interfaceOne<number, string>'.
//   Type '() => 10 | "TS"' is not assignable to type '() => string'.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.ts(2416)
//     */
