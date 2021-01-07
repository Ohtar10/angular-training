var Point = /** @class */ (function () {
    /**
     * The question mark after the variable name
     * in the constructor signature makes the parameter
     * optional.
     * @param x Optional x
     * @param y Optional y
     */
    function Point(x, y, name) {
        var _this = this;
        if (name === void 0) { name = 'A'; }
        this.toString = function () {
            return "Point " + _this.name + ": X: " + _this.x + ", Y: " + _this.y;
        };
        this.name = name;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing point with values: (" + this.x + ", " + this.y + ")");
    };
    Point.prototype.distance = function (other) {
        var d = Math.sqrt(Math.pow(other.x - this.x, 2) + Math.pow(other.y - this.y, 2));
        console.log("Distance between this and " + other + " is: " + d);
    };
    Object.defineProperty(Point.prototype, "Name", {
        /**
         * This is an accesor that defines a property.
         *
         * We can define a set Name() property method too.
         */
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
// Using default constructor
var p1 = new Point();
p1.x = 1;
p1.y = 2;
p1.draw();
// Using the constructor with parameters informed
var p2 = new Point(4, 6, 'B');
p2.draw();
p1.distance(p2);
