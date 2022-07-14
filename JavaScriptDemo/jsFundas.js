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

//arrays
let nums = [1, 2, 3, 4, 5];
let names = ['porkodi', 'rahul', 'avi', 'ais', 'reetika']

console.log(nums.length, names.length)

for (let i = 0; i < nums.length; i++) {
    console.log(i + "->" + nums[i])
}

for (let i in names) {
    console.log(i + "-> " + names[i])
}

var person = {
    name: "Porkodi",
    lastname: "Venkatesh",
    location: "Chennai"
}

console.log(typeof(person))
console.log(person.name);
person.age = 25;
console.log(person.age);
person.location = "Pune"
console.log(JSON.stringify(person))

//JSON -> JavaScript object Notation
//key and value 
var student = [{
        "id": 1,
        "name": "rohit",
        "class": 12
    },
    {
        "id": 2,
        "name": "shruti",
        "class": 13
    }
]

for (let i in student) {
    console.log(i, student[i].id, student[i].name, student[i].class)
}

console.log(student)

//0, false, null, undefined, NaN, '' -> falsy 
//1, true, 2 3 43, -1 , -90 any other -> truthy
if ('') {
    console.log("true block")
} else {
    console.log("false block")
}

if (14 > 8) {
    console.log("true block")
} else {
    console.log("false block")
}