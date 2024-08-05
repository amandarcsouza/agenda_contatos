const form = document.getElementById('form-contatos');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(evento){
    evento.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelefoneContato = document.getElementById('telefone-contato');

    if(telefones.includes(inputTelefoneContato.value)){
        alert(`O telefone ${inputTelefoneContato.value} já foi inserido` );
    } else {
        telefones.push(inputTelefoneContato.value);
        contatos.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}