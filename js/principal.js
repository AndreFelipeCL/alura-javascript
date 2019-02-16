var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

const INVALID_IMC = "Valores incorretos para cálculo."
var validadores = [];

function validaPesoValueType(cliente){
    if(isNaN(cliente.peso)){
        return true;
    }
    return false;
}
validadores.push(validaPesoValueType);

function validaPesoMenor(cliente){
    if(cliente.peso < 40){
        return true;
    }
    return false;
}
validadores.push(validaPesoMenor);

function validaPesoMaior(cliente){
    if(cliente.peso > 250){
        return true;
    }
    return false;
}
validadores.push(validaPesoMaior);

function validaAlturaType(cliente){
    if(isNaN(cliente.altura)){
        return true;
    }
    return false;
}
validadores.push(validaAlturaType);

function validaAlturaMenor(cliente){
    if(cliente.altura < 0.7){
        return true;
    }
    return false;
}
validadores.push(validaAlturaMenor);

function validaAlturaMaior(cliente){
    if(cliente.altura > 3.0){
        return true;
    }
    return false;
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
    
    validadores.every(validador => {
        if(validador(cliente)){
            setIMC(cliente, INVALID_IMC);
            return false;
        } else {
            setIMC(cliente, doCalc(cliente));
            return true;
        }
    });
}

function clienteCriator(htmlItem) {
    var peso = Number(htmlItem.querySelector('.info-peso').innerText);
    var altura = Number(htmlItem.querySelector('.info-altura').innerText);
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
