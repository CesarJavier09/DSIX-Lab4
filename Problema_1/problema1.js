const LARGO = 3;
let par=0, impar=0, cont =0, promedio = 0;
let numeros = Array(LARGO).fill(null).map(() => Array(LARGO));

for (let i = 0; i < LARGO; i++) {
    for (let j = 0; j < LARGO; j++) {
        numeros[i][j] = Number(prompt("Ingrese un número"));
        if (numeros[i][j]%2==0) {
            par ++;
        } else {
            impar += numeros[i][j];
            cont++;
        }
    }
}

alert("Se ingresaron "+ par +" números impares");
alert("El promedio de números impares es: " + impar/cont);