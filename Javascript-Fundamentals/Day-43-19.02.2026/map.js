/* 
 Map Set --> object
 ES6 feature
*/

let mapObject = new Map();
console.log(mapObject); // Map(0) {}

Object.entries(obj); // 2D
// [[key, value], [key, value]]

// class:
let mapObject1 = new Map([["Key1", 10], ['key2', "JS"], [[1, 2], "JS"], [{ a: 2 }, "JS"]]);
console.log(mapObject1);
/* 
Map(4) {
  'Key1' => 10,
  'key2' => 'JS',
  [ 1, 2 ] => 'JS',
  { a: 2 } => 'JS'
}
*/

for (let value of mapObject1) {
    console.log(value);
}

/* 
[ 'Key1', 10 ]
[ 'key2', 'JS' ]
[ [ 1, 2 ], 'JS' ]
[ { a: 2 }, 'JS' ]
*/

console.log(mapObject.size); // 4

console.log(mapObject.keys());
// [Map Iterator] { 'Key1', 'key2', [ 1, 2 ], { a: 2 } }

console.log(mapObject.values());
// [Map Iterator] { 10, 'JS', 'JS', 'JS' }

console.log(mapObject.entries());
/* 
[Map Entries] {
  [ 'Key1', 10 ],
  [ 'key2', 'JS' ],
  [ [ 1, 2 ], 'JS' ],
  [ { a: 2 }, 'JS' ]
}
*/

let mapObj = new Map();

console.log(mapObj); // Map(0) {}

// CURD
// set
mapObj.set("Hi", "JS");
console.log(mapObj); // Map(1) { 'Hi' => 'JS' }
mapObj.set("B", "TS");
mapObj.set([1, 2], "TS");
console.log(mapObj); // Map(3) { 'Hi' => 'JS', 'B' => 'TS', [ 1, 2 ] => 'TS' }

// get() --> retrive
console.log(mapObj.get("B")); // TS
console.log(mapObj.get("Hi")); // JS

// has()
console.log(mapObj.has("B")); // true
console.log(mapObj.has("b")); // false

//  delete()
console.log(mapObj);
console.log(mapObj.delete("B")); // true
console.log(mapObj.delete("b")); // false
console.log(mapObj); // Map(2) { 'Hi' => 'JS', [ 1, 2 ] => 'TS' }