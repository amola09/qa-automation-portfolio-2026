// //1. literal:
// can implements multipal interface with the comma
var classOne = /** @class */ (function () {
    function classOne(para5, para6) {
        this.namee = para5;
        this.age = para6;
    }
    classOne.prototype.printMethod = function () {
        console.log(this.namee);
    };
    return classOne;
}());
var objl = new classOne("JS", 10);
console.log(objl);
objl.printMethod();
