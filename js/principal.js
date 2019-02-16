var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

const INVALID_IMC = "Valores incorretos para cálculo."
var validadores = [];

function validaPesoValueType(cliente){
    if(cliente.peso !== Number){
        return true;
    }
}
validadores.push(validaPesoValueType);

function validaPesoComum(cliente){
    if(cliente.peso > 250){
        return true;
    }
}
validadores.push(validaPesoComum);

function validaAlturaType(cliente){
    if(cliente.altura !== Number){
        return true;
    }
}
validadores.push(validaAlturaType);

function validaAlturaMenor(cliente){
    if(cliente.altura <= 0.5){
        return true;
    }
}
validadores.push(validaAlturaMenor);

function validaAlturaMaior(cliente){
    if(cliente.altura > 3.0){
        return true;
    }
}
validadores.push(validaAlturaMaior);

function clienteBuilder(peso, altura, imc) {
    return {
        "peso": peso,
        "altura": altura,
        "imc": imc
    };
}

function setIMC(cliente, value) {
    cliente.imc.innerText = value;
}

function validaValores(item){    
    var cliente = clienteCriator(item);
    
    validadores.forEach(validador => {
        if(validador(cliente)){
            setIMC(cliente, INVALID_IMC);
            return;
        }
        setIMC(cliente, doCalc(cliente));
    });
}

function clienteCriator(htmlItem) {
    var peso = Math.abs(htmlItem.querySelector('.info-peso').innerText);
    var altura = Math.abs(htmlItem.querySelector('.info-altura').innerText);
    var imc = htmlItem.querySelector('.info-imc');
    return clienteBuilder(peso, altura, imc);
}

function doCalc(cliente) {
    return (cliente.peso / Math.pow(cliente.altura, 2)).toFixed(2);
}


var pacientes = document.querySelectorAll('.paciente');
pacientes.forEach(item => {
    validaValores(item);
});
