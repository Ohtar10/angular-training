// In typescript, we should use 'let' to delcare variables instead of var
let num: number = 10;
let str: string = "This is a string";
let bool: boolean = true;
let num_array: number[] = [1, 2, 3];

//TS also supports enums
//The enum items gets automatic values taring from 0
enum Color {Red, Green, Blue};
let color = Color.Blue;

//Or we can explicitly state the enum items values
enum ExplicitColor {Red = 'red', Green = 'green', Blue = 'blue'};
let explicitColor = ExplicitColor.Blue

console.log("Number variable: " + num);
console.log("String variable: " + str);
console.log("Boolean variable: " + bool);
console.log("Number array variable: " + num_array);
console.log("Enum variable: " + color);
console.log("Explicit enum value: " + explicitColor);
