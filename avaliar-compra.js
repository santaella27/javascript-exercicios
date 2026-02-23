function avaliarCompra(valor, saldo, usuarioAtivo) {
    if (!usuarioAtivo) return "Usuário inativo";
    if (valor <= 0) return "Valor inválido";
    if (saldo < valor) return "Saldo insuficiente";
    return "Compra Aprovada";
}

console.log(avaliarCompra(100, 150, true)); // Compra Aprovada
console.log(avaliarCompra(-10, 150, true)); // Valor inválido
console.log(avaliarCompra(100, 50, true)); // Saldo insuficiente
console.log(avaliarCompra(100, 150, false)); // Usuário inativo