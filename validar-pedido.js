function validarPedido(valor, estoque, usuarioLogado) {
    if (!usuarioLogado) return "Usuário não autenticado";
    if (valor <= 0) return "Valor inválido";
    if (estoque <= 0) return "Produto sem estoque";
    return "Pedido Aprovado";
}

console.log(validarPedido(100, 5, true)); // Pedido Aprovado
console.log(validarPedido(-10, 5, true)); // Valor inválido
console.log(validarPedido(100, -5, true)); // Produto sem estoque
console.log(validarPedido(100, 5, false)); // Usuário não autenticado