function resultado() {
    var arrayNumero = [];
    var res = 0;
    var numero = document.querySelector(".numero").value;

    for (var i = 0; i < numero; i++) {

        if (i > 0) {
            if (i % 3 == 0 || i % 5 == 0) {
                res += arrayNumero[i] = i;
            }

        }

    }

    var resultado = parseInt(res);
    document.querySelector(".Resultado").innerHTML = resultado;
};