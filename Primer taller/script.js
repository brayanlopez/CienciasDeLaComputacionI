function burbuja(arreglo, tamano) {
    var ordenado = arreglo;
    for (var i = 0; i <= tamano - 1; i++) {
        for (var j = i + 1; j < tamano; j++) {
            if (ordenado[i] > ordenado[j]) {
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

function init() { 
    var arreglo = generarVector(5);
    arreglo = burbuja(generarVector(5),5);
    var generar = document.getElementById("generar");
    var vector = document.getElementById("vector");

    generar.onclick = function (e) {
        vector.textContent = arreglo;
    };
}
;

