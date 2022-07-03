const LARGO = 3;
let matriz; 
let suma = [];

const sumarSecundaria = () =>{
    let dSecundaria = 0;
    for (let i = LARGO-1; i >=0; i--) {
        for (let j = 0; j <LARGO; j++) {
            if (i === LARGO-2 && j === LARGO-2) {
                dSecundaria += matriz[i][j];
            }else if(i === 2 && j ===0){
                dSecundaria += matriz[i][j];
            }
            else if(i === 0 && j ===2){
                dSecundaria += matriz[i][j];
            }
        }
    }
    suma.push(dSecundaria);
}

const sumarPrincipal = () =>{
    let dPrincipal = 0;
    for (let i = 0; i < LARGO; i++) {
        for (let j = 0; j < LARGO; j++) {
             if (i === j) {
                 dPrincipal += matriz[i][j];
             }
        }
    }
    suma.push(dPrincipal);
    sumarSecundaria();
}

const sumarColumnas = () =>{
    for (let i = 0; i < LARGO; i++) {
        let col = 0;
        for (let j = 0; j < LARGO; j++) {
             col += matriz[j][i];
        }
        suma.push(col);
    }
    sumarPrincipal();
}

const sumarFilas = () =>{
    for (let i = 0; i < LARGO; i++) {
        let fila = 0;
        for (let j = 0; j < LARGO; j++) {
             fila += matriz[i][j];
        }
        suma.push(fila);
    }
    sumarColumnas();
}

const llenarMatriz = () =>{
    matriz = Array(LARGO).fill(null).map(() => new Array(LARGO).fill(null).map(()=> Number(prompt("Ingrese un numero"))));
    sumarFilas()
}

const esMagica = () =>{
    llenarMatriz();
    let igual = false;
    for ( let i = 0; i < suma.length-1 ; i++){   
        if (suma[i] == suma[i+1]) {
            igual = true
        }else{
          igual = false
          break
        }
    }
      return igual ? alert("La matriz es mágica, la suma de sus elementos es: " + suma[0]) : alert("La matriz no es mágica");
}

esMagica(suma)

console.table(matriz);
console.table(suma);
