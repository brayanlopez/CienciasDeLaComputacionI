var contador;
var tamano;

function burbuja(arreglo, tamano) {
    var ordenado = arreglo;
    contador = 0;
    contador += 1;
    for (var i = 0; i <= tamano - 1; i++) {
        contador += 5;
        for (var j = i + 1; j < tamano; j++) {
            contador += 5;
            if (ordenado[i] >= ordenado[j]) {
                var temporal = ordenado[i];
                ordenado[i] = ordenado[j];
                ordenado[j] = temporal;
                contador += 7;
            }
        }
        contador += 1;
    }
    contador += 2;
    contador -= 6;
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

function generarVector(tamano) {
    var vector = [10];
    for (var i = 0; i < tamano; i++) {
        vector[i] = Math.floor(Math.random() * 100);
    }
    return vector;
}
;

function init(a) {

    //Variables

    var arreglo1;
    var arreglo2;
    var arreglo3;
    var generar = document.getElementById("generar");
    var vectorPeor = document.getElementById("vectorPeor");
    var porContadorPeor = document.getElementById("porContadorPeor");
    var porFormulaPeor = document.getElementById("porFormulaPeor");
    var vectorMedio = document.getElementById("vectorMedio");
    var porContadorMedio = document.getElementById("porContadorMedio");
    var porFormulaMedio = document.getElementById("porFormulaMedio");
    var vectorMejor = document.getElementById("vectorMejor");
    var porContadorMejor = document.getElementById("porContadorMejor");
    var porFormulaMejor = document.getElementById("porFormulaMejor");


    generar.onclick = function (e) {
        tamano = document.getElementById("info").value;

        if (tamano < 0 || tamano == " ") {
            alert("fuera de rango");
        } else {
            arreglo1 = generarVector(tamano);
            arreglo1 = burbujaDescendente(arreglo1, tamano);
            arreglo1 = burbuja(arreglo1, tamano);

            vectorPeor.textContent = "vector: " + arreglo1;
            porContadorPeor.textContent = contador;
            porFormulaPeor.textContent = (6 * Math.pow(tamano, 2)) - 3; //peor caso: 6n^2-3


            arreglo2 = generarVector(tamano);
            arreglo2 = burbuja(arreglo2, tamano);

            vectorMedio.textContent = "vector: " + arreglo2;
            porContadorMedio.textContent = contador;
            porFormulaMedio.textContent = (17 * Math.pow(tamano, 2)+7*tamano-12) / 4; //caso promedio: (17n^2+7n-12)/4


            arreglo3 = generarVector(tamano);
            arreglo3 = burbuja(arreglo3, tamano);
            arreglo3 = burbuja(arreglo3, tamano);

            vectorMejor.textContent = "vector: " + arreglo3;
            porContadorMejor.textContent = contador;
            porFormulaMejor.textContent = (5 * Math.pow(tamano, 2)+7*tamano-6) / 2; //mejor caso: (5n^2+7n-6)/2

        }
    };
}
;
