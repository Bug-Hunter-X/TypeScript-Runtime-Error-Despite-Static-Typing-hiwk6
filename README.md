# TypeScript Runtime Error Despite Static Typing

This repository demonstrates a scenario where a runtime error occurs in TypeScript despite using type annotations.  TypeScript's type system catches many errors at compile time, but not all runtime errors are prevented. 

## Bug Description
The `add` function is defined to accept two numbers and return their sum. However, if a string is passed as an argument, TypeScript will only report a runtime error, as type checking doesn't cover all runtime scenarios.

## Solution
Add runtime type checking within your function to handle unexpected inputs and prevent runtime errors.