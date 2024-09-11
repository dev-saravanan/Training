// Check if a Number or Not
let word = "Text";
let number = 12;
console.log(typeof word === "string" ? "This is a String" : "This is a Number");
console.log(typeof number === "string" ? "This is a String" : "This is a Number");
// ====================================================================================


// Reverse a String
const greet = "welcome";
let reversedString = "";

// Best
const g = [...greet].reverse().join('');
console.log(g);

// General
for (let i = greet.length - 1; i >= 0; i--) {
    reversedString += greet[i];
}
console.log(reversedString);
// ====================================================================================


// Change the uppercase string for first letter of every word in the sentence

let a = "hello world!";
let words = a.split(" ");

let resultArray = [];

for (let i in words) {
    resultArray.push(words[i][0].toUpperCase() + words[i].slice(1, words[i].length));
}

console.log(a + " to " + resultArray.join(" "));
// ====================================================================================


// Remove the last two items in an array and add the two items to the end.

let colors = ['Green', 'Red', 'Blue', 'Orange', 'Yellow']
colors.splice(colors.length - 2, 2, "White", "Violet")

console.log(colors)
// ====================================================================================