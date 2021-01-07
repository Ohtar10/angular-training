## Install typescript
```
npm install -g typescript
```
`g` stands for global

## Check installation
```
tsc --version
```
`tsc` stands for "Typescrypt compiler"

## Transpolation (Compile)
Typescrypt code needs to be transpolated to JavaScript code in order to work on browsers. This is what `tsc` is for. So we use it to with a file like this:
```
tsc main.ts
```
This will generate a file called main.js in the same folder. Depending on the content of main.ts, Typescrypt code will the translated into Javascrypt code, and Javascript code will remain the same.

## Run the compile code
The js files generated after compilation is valid JS code that can be executed using nodjs
```
node main.js
```

## Typescript and JavaScript tips
* Use `let` instead of `var` to declare variables. TS will still generate valid JS code but we might catch issues at compile time.
* Prefer to use type annotations to delcare the variable types: `number`, `boolean`, `string`, `any`, `number[]`
* Always explicitly state the values of enum values.
* If you are going to use `properties`, i.e., `get` and `set` definitions, you must target compilation for `ES5`, otherwise compilation will fail.