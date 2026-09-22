# TypeScript

This project covers the fundamentals of TypeScript: basic types, interfaces, classes, functions, working with the DOM, generics, namespaces, declaration merging, ambient namespaces, and nominal typing.

## Learning Objectives

At the end of this project, you should be able to explain the following without the help of Google:

- Basic types in TypeScript
- Interfaces, Classes, and functions
- How to work with the DOM and TypeScript
- Generic types
- How to use namespaces
- How to merge declarations
- How to use an ambient Namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- All files will be transpiled on Ubuntu 18.04
- TS scripts will be checked with `jest` (version 24.9.*)
- A `README.md` file, at the root of the project folder, is mandatory
- Code should use the `ts` extension when possible
- The TypeScript compiler should not show any warning or error when compiling the code

## Tasks

### 0. Creating an interface for a student

Directory: `task_0`

Configuration files (`package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`) are provided at the root of the task directory.

`js/main.ts` includes:

- An interface named `Student` with `firstName` (string), `lastName` (string), `age` (number), and `location` (string)
- Two `Student` variables, `student1` and `student2`, stored in an array named `studentsList`
- A table rendered in vanilla JavaScript, appending a row for each student's first name and location

**Requirements:**

- Running Webpack should return `No type errors found`
- Every variable uses TypeScript when possible

## Author

Ian Aviles