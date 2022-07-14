function f1() {
    console.log("normal functions - f1")
}

f1()
    /* Hosited up the f2

    function f2() {
        console.log("normal functions - f2")
    }*/ // hositing a functions
f2()

function f2() {
    console.log("normal functions - f2")
}

f3('porkodi') // passing them as values

function f3(s) {
    console.log("normal functions - f3", s)
}

str = "porkodi venkatesh"
f4(str) //passing as reference

//str = "porkodi venkatesh" - error

function f4(s) {
    console.log("normal functions - f3", s)
}

function power(a, b) {
    return a ** b; // a to the power of b, expon
}
console.log(power(2, 3))


let power2 = function(a, b) {
    return a ** b;
}

console.log(power2(3, 2)) // let p = power(3,2); console.log(p)

let print = function() {
    console.log("Hello")
}

print()

let printAF = () => { console.log("hello from arrow function") }

printAF()

let sum = (a, b) => { console.log(a + b) }

console.log(sum)
sum(3, 2)

//closure
function outer() {
    var a = 10;

    function inner() {
        // it can access the variables in outer also the global

        console.log(a)
        console.log(str)
    }

    return inner
}

//console.log(inner()) //reference error because inner function inside the outer so not allowing us access
let returnedFunc = outer() // return the reference of the inner function

console.log(returnedFunc)
console.dir(returnedFunc)
returnedFunc() //making a call


function s1() {
    console.log(" Hi from s1")
}
//s1()

function s2(name, callback) {
    callback()
    console.log("hi from s2 " + name)
    return 2 + 3;
}

console.log(s2(str, s1))