"use strict";
exports.__esModule = true;
exports.sayHello = exports.myVar = void 0;
var n = 9;
function f1(a) {
    console.log(n + a);
}
f1(7);
var car = /** @class */ (function () {
    function car(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    car.prototype.display = function () {
        console.log(this.brand);
        console.log(this.model);
    };
    return car;
}());
var mycar = new car("audi", 90);
mycar.display();
mycar.brand = "maruti";
mycar.display();
exports.myVar = 86;
function sayHello(s) {
    console.log("Hello " + s);
}
exports.sayHello = sayHello;
sayHello("From Demo1");
