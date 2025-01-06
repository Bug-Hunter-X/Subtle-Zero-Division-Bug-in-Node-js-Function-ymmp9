# Node.js Subtle Zero-Division Bug

This repository demonstrates a common, yet subtle, bug in Node.js related to handling zero values in division operations. The `bug.js` file contains the flawed code, while `bugSolution.js` provides a corrected version.

**Bug:** The original function incorrectly returns 0 when either input is 0.  Correct handling would involve explicitly checking for zero and either returning `Infinity` (for positive/negative numbers divided by zero) or throwing an error.

**Solution:** The corrected function utilizes a `try...catch` block to handle potential errors from division by zero, offering more robust error management and accurate results.