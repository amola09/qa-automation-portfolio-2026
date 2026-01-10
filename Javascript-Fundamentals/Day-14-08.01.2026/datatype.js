//  6. Bigint

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// console.log(999999999999999);
// // 999999999999999

// console.log(9999999999999999);
// // 10000000000000000

// literal:
let bigNum = 10n
console.log(bigNum, typeof bigNum); // 10n bigint

// class
bigNum = BigInt(100)
console.log(bigNum, typeof bigNum); // 100n bigint

// console.log(40 + 10n); // TypeError: Cannot mix BigInt and other types, use explicit conversions
console.log(40n + 10n); // 50n
// 10mm + 10m

console.log("-----------------------")








console.log(Number.MAX_SAFE_INTEGER)// 9007199254740991

// hence for further number occurs in calculation JS indtroduce BigInt datatype

// literal way
let bigCal = 10n + 5n
console.log(bigCal)

// class way
let cal = BigInt(200)
console.log(cal, typeof cal)

let cal2 = 10n + 2
console.log(cal2) // TypeError: Cannot mix BigInt and other types, use explicit conversions

