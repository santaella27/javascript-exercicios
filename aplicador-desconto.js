const produto = {
    nome: "teclado",
    preco: 100,
}

function aplicarDesconto(produto, percentualDesconto) {
    const desconto = (produto.preco * percentualDesconto) / 100
    const resultado = {
        nomeProduto: produto.nome,
        precoOriginal: produto.preco,
        precoFinal: produto.preco - desconto,
    }
    return resultado;
}

console.log(aplicarDesconto(produto, 20));
