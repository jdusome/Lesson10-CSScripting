module objects {
  export class Car extends Vehicle {
    // instance variables
    make: string;
    model: string;

    // Constructor
    constructor(wheels, doors, make, model) {
      super(wheels, doors)
      this.make = make;
      this.model = model;
    }

    // methods
    honks() {
      console.log(`Honk Honk!`);
    }
  }
}
