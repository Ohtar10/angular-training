// In typescript, we should use 'let' to delcare variables instead of var
var num = 10;
var str = "This is a string";
var bool = true;
var num_array = [1, 2, 3];
//TS also supports enums
//The enum items gets automatic values taring from 0
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var color = Color.Blue;
//Or we can explicitly state the enum items values
var ExplicitColor;
(function (ExplicitColor) {
    ExplicitColor["Red"] = "red";
    ExplicitColor["Green"] = "green";
    ExplicitColor["Blue"] = "blue";
})(ExplicitColor || (ExplicitColor = {}));
;
var explicitColor = ExplicitColor.Blue;
console.log("Number variable: " + num);
console.log("String variable: " + str);
console.log("Boolean variable: " + bool);
console.log("Number array variable: " + num_array);
console.log("Enum variable: " + color);
console.log("Explicit enum value: " + explicitColor);
