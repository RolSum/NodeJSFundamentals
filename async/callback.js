function sayHi(name, myCallback) {
  setTimeout(() => {
    console.log("Hi " + name);
    myCallback();
  }, 1000);
}

function sayBye(name, anotherCallback) {
  setTimeout(() => {
    console.log("Bye " + name);
    anotherCallback();
  }, 1000);
}

console.log("Starting...");
sayHi("Rolando", () => {
  sayBye("Rolando", () => {
    console.log("Finishing...");
  });
});
