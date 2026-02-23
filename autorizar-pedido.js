function autorizarPedido(valor, estoque, limiteDiario, totalHoje, usuarioAtivo) {
    if (valor <= 0) return "Valor inválido";
    if (!usuarioAtivo) return "Usuário inativo";
    if (estoque <= 0) return "Produto sem estoque";
    if (limiteDiario < totalHoje + valor) return "Limite Diario Ultrapassado";
    return totalHoje + valor
}

console.log(autorizarPedido(100, 10, 500, 200, true)); // 300
console.log(autorizarPedido(100, 0, 500, 200, true)); // "Produto sem estoque"
console.log(autorizarPedido(100, 10, 500, 450, true)); // "Limite Diario Ultrapassado"
console.log(autorizarPedido(-50, 10, 500, 200, true)); // "Valor inválido"
console.log(autorizarPedido(100, 10, 500, 200, false)); // "Usuário inativo"