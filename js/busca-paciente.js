var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        var data = xhr.responseText;
        var pacientes = JSON.parse(data);
        
        var mensagemErro = document.querySelector("#mensagem-erro-by-ajax");
        pacientes.forEach(paciente => {
            var pacienteTr = criaTrElement(paciente);
            
            if(validaPaciente(paciente)){
                mensagemErro.textContent = "Paciente com dados inválidos! Verifique o console...";
                paciente.imc = INVALID_IMC;
                pacienteTr = criaTrElement(paciente)
                pacienteTr.classList.add('paciente-invalido');
            } else {   
                setIMC(paciente, doIMCCalc(paciente));
            }
            
            appendToTableList(pacienteTr);
        });

    });

    xhr.send();

});