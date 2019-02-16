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
            item.classList.add('paciente-invalido');
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

function init() {
    var pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(item => {
        validaValores(item);
    });
}

var buttonAdd = document.querySelector('#adicionar-paciente');
buttonAdd.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    var nomeTd = document.createElement("td");
    nomeTd.classList.add('info-nome')
    var pesoTd = document.createElement("td");
    pesoTd.classList.add('info-peso');
    var alturaTd = document.createElement("td");
    alturaTd.classList.add('info-altura');
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add('info-gordura')
    var imcTd = document.createElement("td");
    imcTd.classList.add('info-imc')
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");

    validaValores(pacienteTr);
    tabela.appendChild(pacienteTr);
});

init();