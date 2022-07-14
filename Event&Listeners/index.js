var elmt = document.getElementById("btn");
let func1 = () => {
    elmt.style.backgroundColor = "green";
    elmt.innerHTML = "Mouse over"
    console.log("Mouse over the elemebt")
}

elmt.addEventListener(
    "mouseover",
    func1()
)


elmt.addEventListener(
    "mouseout",
    func2()
)

function func2() {
    elmt.style.backgroundColor = "red";
    elmt.innerHTML = "MouseOut"
    console.log("Mouse out the elemebt")
}

elmt.addEventListener(
    "click",
    func3
)

function func3() {
    elmt.style.backgroundColor = "yellow";
    elmt.innerHTML = "clicked"
    console.log("clicked")
}

elmt.addEventListener(
    "dblclick",
    func4
)

function func4() {
    elmt.style.backgroundColor = "blue";
    elmt.innerHTML = "double clicked"
    console.log("double clicked")
}


document.writeln("hi")
document.write("porkodi")

let value = prompt("Enter any value", 50)
console.log(value)


let isClose = confirm("are you close?")

if (isClose) {
    window.location.href = "https://revature.com/in/"
}