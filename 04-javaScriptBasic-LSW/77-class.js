//todo: 79-js class inheritance

// Define the parent class
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}

// Define the child class 
class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let newCar =new Model('bmw','b1');
console.log(newCar);
console.log(newCar.show())