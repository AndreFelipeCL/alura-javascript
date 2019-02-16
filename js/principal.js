function validaValores(pacienteHTML){    
    var paciente = pacienteCriator(pacienteHTML);
    validadores.every(validador => {
        if(validador(paciente)){
            setIMC(paciente, INVALID_IMC);
            pacienteHTML.classList.add('paciente-invalido');
            return false;
        } else {
            setIMC(paciente, doIMCCalc(paciente));
            return true;
        }
    });
}

function setIMC(paciente, value) {
    paciente.imc.innerText = value;
}

function doIMCCalc(paciente) {
    return (paciente.peso / Math.pow(paciente.altura, 2)).toFixed(2);
}

function init() {
    var pacientesHTML = document.querySelectorAll('.paciente');
    pacientesHTML.forEach(pacienteHTML => {
        validaValores(pacienteHTML);
    });
}

init();