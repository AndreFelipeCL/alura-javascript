var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

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

function setIMC(cliente, value) {
    cliente.imc.innerText = value;
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

init();