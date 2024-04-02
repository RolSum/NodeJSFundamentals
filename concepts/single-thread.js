// Sólo se puede ejecutar un proceso a la vez
console.log("Hola mundo");

let i = 0;
// Seguir ejecutando código
// Se ejecutará asyncronamente (al último)
setInterval(function () {
  console.log(i);
  i++;

  if (i === 5) {
    console.log("Forzar Error");
    var a = 3 + z;
  }
}, 1000);

console.log("Segunda instrucción");
