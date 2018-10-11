class Car {
  constructor() {
    this.wheels = 4;
    this.type = 'Sedan';
  }
}

class Ford extends Car {}

const car = new Car();
const ford = new Ford();

console.log(ford.wheels);
