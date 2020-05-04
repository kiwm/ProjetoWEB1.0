


function proximoCadastro() {
    document.getElementById("cadastroP1").style.display = "none";
    document.getElementById("cadastroP2").style.display = "flex";
}

function cadastroAnterior() {
    document.getElementById("cadastroP1").style.display = "flex";
    document.getElementById("cadastroP2").style.display = "none";
}

function adicionarLinha(idTabela) {
    var nome = document.getElementById("cadastroNomeP");
    var descricao = document.getElementById("cadastroDescricaoP");
    var quantidade = document.getElementById("cadastroQuantidadeP");
    var valor = document.getElementById("cadastroValorP");
    var desconto = document.getElementById("cadastroDescontoP");
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
    celula2.innerHTML = descricao.value;
    celula3.innerHTML = quantidade.value;
    celula4.innerHTML = valor.value;
    celula5.innerHTML = desconto.value;
    celula6.innerHTML = "<button class='xButton' onclick='removeLinha(this)'></button> <button class='editarButton' onclick='editarLinha(this)'></button>";
    nome.value = "";
    descricao.value = "";
    quantidade.value = "";
    valor.value = "";
    desconto.value = "";

}

function editarLinha(linha) {
    var index = linha.parentNode.parentNode.rowIndex;
    var table = document.getElementById("tb1");
    var rows = table.rows;
    var row = rows[index];

    document.getElementById("cadastroNomeP").value = row.children[0].innerHTML;
    document.getElementById("cadastroDescricaoP").value = row.children[1].innerHTML
    document.getElementById("cadastroQuantidadeP").value = row.children[2].innerHTML
    document.getElementById("cadastroValorP").value = row.children[3].innerHTML
    document.getElementById("cadastroDescontoP").value = row.children[4].innerHTML
    removeLinha(linha);
}


function removeLinha(linha) {
    var i = linha.parentNode.parentNode.rowIndex;
    document.getElementById('tb1').deleteRow(i);
}