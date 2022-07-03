const LARGO = 2;
const matriz = Array(LARGO).fill(null).map(() => new Array(LARGO).fill(null).map(()=> Number(prompt("Ingrese un numero"))));

const principal = () =>{
    let dPrincipal = 1;
    for (let i = 0; i < LARGO; i++) {
        for (let j = 0; j < LARGO; j++) {
             if (i === j) {
                 dPrincipal *= matriz[i][j];
             }
        }
    }
    return dPrincipal;
}

const secundaria = () =>{
    let dSecundaria = 1;
    for (let i = LARGO-1; i >=0; i--) {
        for (let j = 0; j <LARGO; j++) {
            if (i !== j) {
                 dSecundaria *= matriz[i][j];
            }
        }
    }
    return dSecundaria
}

alert("El determinante de la matriz es : " + (principal()-secundaria()) )

