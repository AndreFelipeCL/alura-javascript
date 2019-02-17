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

function validaPaciente(paciente) {
    return validadores.some(validador => validador(paciente));
}