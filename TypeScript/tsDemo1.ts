var n : number = 9;

function f1(a) : void{
   console.log (n + a);
}
f1(7);

class  car {
    brand : string;
    model : number;

    constructor (brand : string ,  model : number){
        this.brand = brand;
        this.model = model;
    }

    display(){
        console.log(this.brand)
        console.log(this.model)
    }
}

const mycar = new car ("audi" , 90);
mycar.display()

mycar.brand = "maruti"
mycar.display()


export const myVar = 86;

export function sayHello(s){
    console.log("Hello " + s)
}

sayHello("From Demo1");