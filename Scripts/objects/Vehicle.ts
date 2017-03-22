module objects {
  // NEWER class declaration - es6
  // vehicle class
  export class Vehicle {
    // Instance Variables
    wheels: number;
    doors: number;

    // Constructor
    constructor(wheels, doors) {
      this.wheels = wheels;
      this.doors = doors;
    }

    // methods
    drives() {
      console.log(`Vehicle is driving`);
    }
  }
}
