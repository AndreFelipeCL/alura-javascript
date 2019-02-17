var buttonAdd = document.querySelector('#adicionar-paciente');

buttonAdd.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var paciente = obtemPacienteDoFormulario(form);
    
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = "";
    if(validaPaciente(paciente)){
        mensagemErro.textContent = "Paciente com dados inválidos!";
        return;
    }

    paciente.imc = doIMCCalc(paciente);
    appendToTableList(criaTrElement(paciente));
    form.reset();
});

function appendToTableList(pacienteTr) {
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

function obtemPacienteDoFormulario(form) {
    return {
        'nome' : form.nome.value,
    	'peso' : form.peso.value,
    	'altura' : form.altura.value,
        'gordura' : form.gordura.value,
        'imc' : ''
    };
}

function criaTrElement(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    
    var nomeTd = createTd(paciente.nome, 'info-nome');
    var pesoTd = createTd(paciente.peso, 'info-peso');
    var alturaTd = createTd(paciente.altura, 'info-altura');
    var gorduraTd = createTd(paciente.gordura, 'info-gordura');
    var imcTd = createTd(paciente.imc, 'info-imc');

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    return pacienteTr;
}

function createTd(valor, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = valor;
    return td;
}
