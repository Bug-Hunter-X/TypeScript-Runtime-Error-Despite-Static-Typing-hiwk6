function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, '2'); // Type error is not caught at compile time
console.log(result); // This will cause a runtime error.