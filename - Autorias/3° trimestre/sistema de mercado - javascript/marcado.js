let produtos = [];

function adicionarProduto() {
    const nomeProduto = document.getElementById('produto').value;
    const valorProduto = parseFloat(document.getElementById('valor').value);

    if (nomeProduto && !isNaN(valorProduto) && valorProduto > 0) {
        produtos.push({ nome: nomeProduto, valor: valorProduto });
        atualizarLista();
        atualizarTotal();
        limparCampos();
    } else {
        alert('Por favor, insira um nome e um valor válido para o produto.');
    }
}

function atualizarLista() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} ............. R$ ${produto.valor.toFixed(2)}`;
        listaProdutos.appendChild(li);
    });
}

function atualizarTotal() {
    const totalElement = document.getElementById('total');
    const total = produtos.reduce((acc, produto) => acc + produto.valor, 0);
    totalElement.textContent = total.toFixed(2);
}

function limparCampos() {
    document.getElementById('produto').value = '';
    document.getElementById('valor').value = '';
}