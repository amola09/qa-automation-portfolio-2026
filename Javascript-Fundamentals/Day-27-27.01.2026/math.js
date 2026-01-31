var a = 10;
console.log("Line: 1", a);
function fu() {
    console.log("line: 2", a);
    var a = 28;
    a++;
    console.log("line: 3", a);
    if (a) {
        var a = 30;
        a++;
        console.log("line: 4", a);
    }
    console.log("line: 5", a);
}
console.log("Line: 6", a);
fu();
