// One way to define an abstract object in-line
var drawPoint = function (point) {
    console.log("Received coordinates: x=" + point.x + ", y=" + point.y);
};
drawPoint({ x: 1, y: 2 });
var drawPoint2 = function (point) {
    console.log("Received coordinates: x=" + point.x + ", y=" + point.y);
};
drawPoint2({
    x: 2,
    y: 4
});
