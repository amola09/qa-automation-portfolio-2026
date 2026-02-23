let obj = {
    a: 10,
    b: true
}

// let { a } = obj;
// sperate (spread)
// console.log(a); // 10;

// let { ...obj2 } = obj;
// // LHS ---> rest operation

// console.log(obj2); // { a: 10, b: true }

let { a, ...obj2 } = obj;
console.log(a); // 10
console.log(obj2); // {b:true}


/// combination with ...

let obj4 = {
    a: 10,
    b: true
};
// c:false
// obj4.c = flase;

let obj5 = {
    c: false,
    ...obj4
};

console.log(obj5); // { c: false, a: 10, b: true }

// spread creating shallow copy