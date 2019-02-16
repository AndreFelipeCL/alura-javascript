function clienteBuilder(peso, altura, imc) {
    return {
        "peso": peso,
        "altura": altura,
        "imc": imc
    };
}

function clienteCriator(htmlItem) {
    var peso = Number(htmlItem.querySelector('.info-peso').innerText);
    var altura = Number(htmlItem.querySelector('.info-altura').innerText);
    var imc = htmlItem.querySelector('.info-imc');
    return clienteBuilder(peso, altura, imc);
}