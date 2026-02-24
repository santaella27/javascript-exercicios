function registrarTransacao(valor, saldo, limite, totalHoje, contaAtiva) {
    if (!contaAtiva) return "Conta Bloqueada";
    if (valor <= 0) return "Valor inválido";
    if (limite < totalHoje + valor) return "Limite Ultrapassado";
    if (saldo < valor) return "Saldo Insuficiente";
    return totalHoje + valor
}

console.log(registrarTransacao(100, 500, 200, 50, true)); // 150
console.log(registrarTransacao(100, 500, 200, 150, true)); // "Limite Ultrapassado"
console.log(registrarTransacao(100, 50, 200, 50, true)); // "Saldo Insuficiente"
console.log(registrarTransacao(100, 500, 200, 50, false)); // "Conta Bloqueada"
console.log(registrarTransacao(-100, 500, 200, 50, true)); // "Valor inválido" 