var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

function validaValores(item){    
    var paciente = pacienteCriator(item);
    validadores.every(validador => {
        if(validador(paciente)){
            setIMC(paciente, INVALID_IMC);
            item.classList.add('paciente-invalido');
            return false;
        } else {
            setIMC(paciente, doCalc(paciente));
            return true;
        }
    });
}

function setIMC(cliente, value) {
    cliente.imc.innerText = value;
}

function doCalc(paciente) {
    return (paciente.peso / Math.pow(paciente.altura, 2)).toFixed(2);
}

function init() {
    var pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(item => {
        validaValores(item);
    });
}

init();