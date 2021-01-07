"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2 = void 0;
var Point2 = /** @class */ (function () {
    function Point2(name, x, y) {
        var _this = this;
        this.toString = function () {
            return "Point '" + _this._name + "': (" + _this._x + ", " + _this._y + ")";
        };
        this._name = name;
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point2.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point2.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    return Point2;
}());
exports.Point2 = Point2;
