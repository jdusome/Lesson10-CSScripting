var objects;
(function (objects) {
    // NEWER class declaration - es6
    // vehicle class
    var Vehicle = (function () {
        // Constructor
        function Vehicle(wheels, doors) {
            this.wheels = wheels;
            this.doors = doors;
        }
        // methods
        Vehicle.prototype.drives = function () {
            console.log("Vehicle is driving");
        };
        return Vehicle;
    }());
    objects.Vehicle = Vehicle;
})(objects || (objects = {}));
//# sourceMappingURL=Vehicle.js.map