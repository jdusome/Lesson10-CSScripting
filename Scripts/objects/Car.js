var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Car = (function (_super) {
        __extends(Car, _super);
        // Constructor
        function Car(wheels, doors, make, model) {
            var _this = _super.call(this, wheels, doors) || this;
            _this.make = make;
            _this.model = model;
            return _this;
        }
        // methods
        Car.prototype.honks = function () {
            console.log("Honk Honk!");
        };
        return Car;
    }(objects.Vehicle));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=Car.js.map