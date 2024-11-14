// Immediately Invoked Function Expressions (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");

// Conflicts happen when two variables share the
// same name in the global scope, causing one to overwrite the other.
// IIFEs help prevent this by keeping variables private within their own scope.


// This pattern is used to create a local scope, avoiding polluting the global scope.