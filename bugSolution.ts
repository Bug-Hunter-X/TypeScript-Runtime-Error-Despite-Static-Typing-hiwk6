function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: Arguments must be numbers');
  }
  return a + b;
}

const result1 = add(1, 2); // Correct usage
console.log(result1); // Output: 3

try {
  const result2 = add(1, '2'); // Incorrect usage
  console.log(result2);
} catch (error) {
  console.error(error.message); // Output: Error: Invalid input: Arguments must be numbers
}
