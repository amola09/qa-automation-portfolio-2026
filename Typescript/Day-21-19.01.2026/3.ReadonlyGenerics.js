/*
Utility Types: `Partial`, `Required`, `Readonly`
*/
/*
Utility Types: `Readonly`
Can only access the properties. Not able to update it
*/
var obj = {
    key1: 10,
    key2: "TS",
};
console.log(obj);
// obj.key1 = 100; //  TS2540: Cannot assign to 'key1' because it is a read-only property.
console.log(obj);
var obj2 = {
    key1: true,
    key2: false
};
console.log(obj2);
obj2.key2 = 100;
console.log(obj2);
