// 1. WAP to reverse a string
// 	input:- 'sachin'
// 	output:- 'nihcas'

let str = "Sachin"
console.log(str.split("").reverse().join(''))

// 2. WAP to reverse words
// 	input:- 'This is javascript class'
// 	output:- 'class javascript is this'

let str2 = 'This is javascript class'
console.log(str2.split(' ').reverse().join(" "))

// 3. WAP to print the first non-repeated character in a string
//    input:- 'entertainment'
//    output:- r

let str3 = 'entertainment'
console.log(str3.repeat(""))

// 4. WAP to print a string in title case
//    input:- 'this is javascript class'
//    output:- 'This Is Javascript Class'

let str4 = 'this is javascript class'
console.log(str4.charAt(0).toUpperCase() + str4.slice(1))
	
// 5. WAP to find longest word in a sentence
// 	input:- 'this is javascript class'
//     output:- javascript
	
// 6. WAP to print Account number
//    input:- '12345678987'
//    output:- '12*******87'
   
// 7. WAP to print Credit-card number
//    input:- '1111222233334444'
//    output:- '1111-2222-3333-4444'

// let str7 = '1111222233334444'
// console.log(str7.split('-'))