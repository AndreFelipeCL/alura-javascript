function pacienteBuilder(peso, altura, imc) {
    return {
        "peso": peso,
        "altura": altura,
        "imc": imc
    };
}

function pacienteCriator(htmlItem) {
    var peso = Number(htmlItem.querySelector('.info-peso').innerText);
    var altura = Number(htmlItem.querySelector('.info-altura').innerText);
    var imc = htmlItem.querySelector('.info-imc');
    return pacienteBuilder(peso, altura, imc);
}