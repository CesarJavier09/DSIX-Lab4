let cadena = prompt("Ingrese una cadena de caracteres");

const contarVocales = str => Array.from(str.toLowerCase())
  .filter(letra => 'aáeéiíoóuü'.includes(letra)).length;

const contarConsonantes = str => Array.from(str.toLowerCase())
  .filter(letra => !'aáeéiíoóuü'.includes(letra)).length;

alert(cadena + ", Tiene " + contarVocales(cadena) + " vocales y " + contarConsonantes(cadena) + " consonantes.");

console.log(cadena);