/* 
        startsWith(subString)
        endsWith(subString)
        concat(joiner, joining element)
        padStart(string length, padElement)
        padEnd(string length, padElement)        
        repeat(count)
        replace(targetString, replacerString)
        replaceAll(targetString, replacerString)
*/

// startsWith(subString)

// "JavaScript"
//  0123456789
// "Ja" --> substring

console.log("JavaScript".startsWith("va")); // false
console.log("JavaScript".startsWith("Ja")); // true
console.log("JavaScript".startsWith("va", 2)); // true

// endsWith(subString)
console.log("JavaScript".endsWith("pt")); // true
console.log("JavaScript".endsWith("ri")); // false
console.log("JavaScript".endsWith("ri", 8));

// concat(...strings: string[])
console.log("JavaScript".concat("HI")); // JavaScriptHI
console.log("JavaScript".concat("*", "HI", "TS")); // JavaScript*HITS

// padStart(string length, padElement)
console.log("JavaScript".padStart(12, "HI")); // HIJavaScript
console.log("JavaScript".padStart(14, "HI")); // HIHIJavaScript

// padEnd(string length, padElement)    
console.log("JavaScript".padEnd(14, "HI")); // JavaScriptHIHI


// repeat(count)
console.log("JavaScript".repeat(3)); // JavaScriptJavaScriptJavaScript


// replace(targetString, replacerString)
console.log("JavaScript".replace("a", "A")); // JAvaScript

// replaceAll(targetString, replacerString)
console.log("JavaScript".replaceAll("a", "A")); // JAvAScript

/* 
* search string:
        search(string/RegExp)
        indexOf(string, index(startPoint))
        lastIndexOf(string, index(startPoint))
        includes(subString, index(startPoint))


*/
// search(string/RegExp)
console.log("JavaScript".search("a")); // 1
console.log("JavaScript".search("ava")); // 1
console.log("JavaScript".search("t")); // 9

// indexOf(string, index(startPoint))

console.log("JavaScript".indexOf("t")); // 9
console.log("JavaScript".indexOf("av")); // 1

console.log("JavaScript".indexOf("a")); // 1
console.log("JavaScript".indexOf("a", 2)); // 3

// second occurance
let firstOccurance = "JavScripat".indexOf("a");
let secondOccurance = "JavScripat".indexOf("a", firstOccurance + 1);
console.log(secondOccurance); // 8