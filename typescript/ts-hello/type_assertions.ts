// In TS, if we do not explicitly declare the variable types
// or we are dealing with a variable whose type is unknown at compile time,
// we can use type assertions to ensure the variable is of a certain type,
// this is similar to casting in java.

// Notice here we do not declare the type
let message;
message = "Hello";
// Type cast option 1
let type_assertion_1 = (<string> message).endsWith('0');
// Type cast option 2
let type_assertion_2 = (message as string).endsWith('o');
