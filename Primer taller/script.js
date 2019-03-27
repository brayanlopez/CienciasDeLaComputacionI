var contador;

function burbuja(arreglo, tamano) {
    var ordenado = arreglo;
    contador = 0;
    contador += 1;
    for (var i = 0; i <= tamano - 1; i++) {
        contador += 5;
        for (var j = i + 1; j < tamano; j++) {
            if (ordenado[i] > ordenado[j]) {
                contador += 7;
                var temporal = ordenado[i];
                ordenado[i] = ordenado[j];
                ordenado[j] = temporal;
            }
        }
        contador += 1;
    }
    contador += 2;
    return ordenado;
}
;

function burbujaDescendente(arreglo, tamano) {
    var ordenado = arreglo;
    for (var i = 0; i <= tamano - 1; i++) {
        for (var j = i + 1; j < tamano; j++) {
            if (ordenado[i] < ordenado[j]) {
                var temporal = ordenado[i];
                ordenado[i] = ordenado[j];
                ordenado[j] = temporal;
            }
        }
    }
    return ordenado;
}
;
/*
 function generarVector(tamano) {
 var vector = [10];
 for (var i = 0; i < tamano; i++) {
 vector[i] = Math.floor(Math.random() * 100);
 }
 return vector;
 }
 ;
 */

function generarVector(tamano) {
    var vector = [10];
    for (var i = 0; i < tamano; i++) {
        vector[i] = 100 - i;
    }
    return vector;
}
;

//6n^2-3

function init() {
    var tamano = 5;
    var arreglo = generarVector(tamano);
    var generar = document.getElementById("generar");
    var vector = document.getElementById("vector");
    var porContador = document.getElementById("porContador");
    var porFormula = document.getElementById("porFormula");

//    arreglo = burbujaDescendente(arreglo,5);
    arreglo = burbuja(arreglo, tamano);

    generar.onclick = function (e) {
        vector.textContent = arreglo;
        porContador.textContent = contador;
        porFormula.textContent = Math.pow(6, 2) * tamano - 3;
    };
}
;

