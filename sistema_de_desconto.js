let cliente = {
    nome: "sebastian",
    idade: 22,
    valorCompra: 500,
}

function verificarCompra(cliente) {
    let porcentagem = 0;
    if (cliente.valorCompra >= 500) porcentagem = 20;
    else if (cliente.valorCompra >= 200) porcentagem = 10;
    else porcentagem = 0;
    let desconto = (cliente.valorCompra * porcentagem) / 100;
    let valorComDesconto = cliente.valorCompra - desconto;

    return {
        nome: cliente.nome,
        valorOriginal: cliente.valorCompra,
        desconto: desconto,
        valorFinal: valorComDesconto,
    }
}
console.log(verificarCompra(cliente));