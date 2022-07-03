let numeritos =  [1 , 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10, 11];

console.log(numeritos);

const eliminarRepetido = () =>{
    const eliminar = (num) =>{
        let contador = 0;
        for (let j = 1; j < numeritos.length; j++) {
            if (num == numeritos[j]) {
                contador++;
                if (contador > 1) {
                    numeritos.splice(j,1);
                    contador = 0;
                }
            }
        }
    }
    for (let i = 0; i < numeritos.length; i++) {
        eliminar(numeritos[i]);
    }
}

eliminarRepetido();


console.log(numeritos);