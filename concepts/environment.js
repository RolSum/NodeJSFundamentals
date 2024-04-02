/* let hi = "Hola";
console.log(hi); */

// Execute this like
// Name=Rolando node concepts/environment.js
let name = process.env.Name || "No Name";
console.log("Hola " + name);

// Nodemon, is a npm package to keep the server alive
// PM2 is a more advanced alternative.

// Example: nodemon --watch concepts/environment.js
// Now, we don't need to use nodemon since node has the capaability to keep alive the server without any package.
// Example: node --watch concepts/environment.js
