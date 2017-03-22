/* outer closure - MODULE */
var CarsAndTrucks;
(function (CarsAndTrucks) {
    /* inner closure # 1 - CLASS - Vehicle */
    var Vehicle = (function () {
        /* constructor */
        function Vehicle(wheels, doors) {
            this.wheels = wheels;
            this.doors = doors;
        }
        return Vehicle;
    }());
    CarsAndTrucks.Vehicle = Vehicle;

    /* inner closure # 2 - CLASS - Car */
    var Car = (function () {
        /* constructor */
        function Car(wheels, doors, make, model) {
            this.wheels = wheels;
            this.doors = doors;
            this.make = make;
            this.model = model;
        }
        return Car;
    }());
    CarsAndTrucks.Car = Car;

    /* inner closure # 3 - CLASS - Truck */
    var Truck = (function () {
        /* constructor */
        function Truck(wheels, doors, make, model, hasContainer) {
            this.wheels = wheels;
            this.doors = doors;
            this.make = make;
            this.model = model;
            this.hasContainer = hasContainer;
        }
        return Truck;
    }());
    CarsAndTrucks.Truck = Truck;
})(CarsAndTrucks || (CarsAndTrucks = {}));

