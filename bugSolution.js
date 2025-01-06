```javascript
function myFunction(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
}

// Example Usage

try {
  console.log(myFunction(10, 2)); // Output: 5
  console.log(myFunction(0, 5)); // Output: 0
  console.log(myFunction(10, 0)); // Throws Error
} catch (error) {
  console.error(error.message); // Output: 'Division by zero'
}
```