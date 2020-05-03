function proximoCadastro() {
    document.getElementById("cadastroP1").style.display = "none"
    document.getElementById("cadastroP2").style.display = "flex"
}

function cadastroAnterior() {
    document.getElementById("cadastroP1").style.display = "flex"
    document.getElementById("cadastroP2").style.display = "none"
}

function adicionarLinha(idTabela) {
    var nome = document.getElementById("cadastroNomeP");
    var tabela = document.getElementById(idTabela);
    var numeroLinhas = tabela.rows.length;
    var linha = tabela.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    var celula6 = linha.insertCell(5);
    celula1.innerHTML = nome.value;
    celula2.innerHTML = Math.floor((Math.random() * 100) + 1);
    celula6.innerHTML = "<button class='xButton' onclick='removeLinha(this)'></button>";

}

// funcao remove uma linha da tabela
function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tb1').deleteRow(i);
}