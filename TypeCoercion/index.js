// creating v without using a keywords let,const,var

"use strict";
let v = 5; //holding a number
//v=5 is not allowed
console.log(v, typeof(v))

// v = "porkodi" // holding a string
// console.log(v)

//== vs === 

console.log(5 == "5");
console.log(5 === "5");

let vString1 = 5 + ''; //implicit
let vString2 = String(v); //explict

console.log(vString1, typeof(vString1))
console.log(vString2, typeof(vString2))