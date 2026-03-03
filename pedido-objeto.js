let pedido = {
    produto: "teclado",
    preco: 250,
    quantidade: 10,
}

function processarPedido(pedido) {
    const total = pedido.preco * pedido.quantidade;
    if (total >= 100) return `Pedido Aprovado - Total: ${total}`;
    return `Pedido aprovado sem desconto - Total: ${total}`;
}

console.log(processarPedido(pedido));