let array_A = [1, 2, 3, 4, 5];
let array_B = [2, 3, 4, 5, 6];

let arraySumaAB = operarArrays(array_A, array_B,  suma);
arrayEnTabla(arraySumaAB);

let arrayMultAB = operarArrays(array_A, array_B,  multiplica);
arrayEnTabla(arrayMultAB);

let arrayDivAB = operarArrays(array_A, array_B,  (x, y) => x / y );
arrayEnTabla(arrayDivAB);

let arrayRestaAB = operarArrays(array_A, array_B,  resta);
arrayEnTabla(arrayRestaAB);

let arrayPuntosAB = operarArrays(array_A, array_B,  hacerPunto);
arrayEnTabla(arrayPuntosAB);

function arrayEnTabla(array) {
    let tabla = "<table border=2><tr>";
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        tabla += "<td>&nbsp; " + element + " &nbsp;</td>";
    }
    document.getElementById("contenido").innerHTML += 
                    tabla + "</tr></table>";
}