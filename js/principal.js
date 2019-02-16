var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

function calcIMC(){
    var pacientes = document.querySelectorAll('.paciente');
    pacientes.forEach(item => {
        var peso = Math.abs(item.querySelector('.info-peso').innerText);
        var altura = Math.abs(item.querySelector('.info-altura').innerText);
        var imc = item.querySelector('.info-imc');
        imc.innerText = (peso / (altura*altura)).toFixed(2);
    });
};

calcIMC();