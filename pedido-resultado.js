const pedido = {
  produto: "teclado",
  preco: 250,
  quantidade: 3
};

function calcularTotal(pedido) {
  return pedido.preco * pedido.quantidade;
}

function definirStatus(total) {
  return total >= 100 ? "Aprovado" : "Pendente";
}

function processarPedido(pedido) {
  const total = calcularTotal(pedido);
  const status = definirStatus(total);

  return {
    produto: pedido.produto,
    total: total,
    status: status
  };
}

console.log(processarPedido(pedido));