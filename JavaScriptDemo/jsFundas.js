//variables - let, var, const
//datatypes - number,string,boolean
let a = 12;
let b = 13.5;

//Infinity and -Infinity
var c = 5 / 0;
var d = -5 / 0;

d = "Porkodi"; //updating the d with string
var e = 'Porkodi';
var f = `Porkodi`;

var g = d / 7; // string by 7 //NaN //Number
var h = e - 9; // string - 9


function print() {
    //variable i'm accessing here is declared & initialized outside
    console.log("a = " + a + " b = " + b)
    console.log("a = " + typeof(a) + " b = " + typeof(b))
    console.log("c = " + c + " d = " + d)
    console.log("c = " + typeof(c) + " d = " + typeof(d))
        //console.log("d = " + d);
    console.log(`d = ${d}`)
    console.log(`g = ${g}  h = ${h}
type of g and h is ${typeof(g)} ${typeof(h)} `)
        //NaN - not a number

    let n = 34; // within this function //block scope
}

print()

//console.log(n) - jsFundas.js:35 Uncaught ReferenceError: n is not defined
let z; //declared
console.log(z) //result in undefined
z = 18;
console.log(z)

let x = null;
console.log(x)