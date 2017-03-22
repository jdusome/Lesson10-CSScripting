var objects;
(function (objects) {
    /* closure  - IIFE */
    var Point = (function () {
        // Point class constructor
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        // Normalize method
        Point.prototype.Normalize = function () {
            this.x = 1;
            this.y = 1;
        };
        // Zero method
        Point.prototype.Zero = function () {
            this.x = 0;
            this.y = 0;
        };
        // static method Distance
        Point.Distance = function (p1, p2) {
            return Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2));
        };
        return Point;
    }());
    objects.Point = Point;
})(objects || (objects = {}));
//# sourceMappingURL=Point.js.map