function processarPagamento(valor, saldo, cartaoValido, usuarioLogado) {
    if (!usuarioLogado) return "Usuário não autenticado";
    if (!cartaoValido) return "Cartão inválido";
    if (valor <= 0) return "Valor inválido";
    if (saldo < valor) return "Saldo Insuficiente";
    return "Pagamento Aprovado";
}

console.log(processarPagamento(100, 150, true, true)); // Pagamento Aprovado
console.log(processarPagamento(100, 50, true, true)); // Saldo Insuficiente
console.log(processarPagamento(100, 150, false, true)); // Cartão inválido
console.log(processarPagamento(100, 150, true, false)); // Usuário não autenticado
console.log(processarPagamento(-10, 150, true, true)); // Valor inválido