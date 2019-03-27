function burbuja(arreglo, tamano) {
    for (var i = 0; i <= tamano - 1; i++) {
        for (var j = i + 1; j < tamano; j++) {
            if (arreglo[i] > arreglo[j]) {
                var temporal = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = temporal;
            }
        }
    }
}
;

function generarVector(tamano) {
    var vector = [10];
    for (var i = 0; i < tamano; i++) {
        vector[i] = Math.random();
    }
    return vector;
}
;

function init() {
    var arreglo = generarVector(5);
    var generar = document.getElementById("generar");
    var vector = document.getElementById("vector");

    generar.onclick = function (e) {
        vector.textContent = arreglo;
    };
}
;

