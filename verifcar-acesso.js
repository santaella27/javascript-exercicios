function verificarAcesso(idade, temPermissao) {
    if (idade < 0) return "Idade Inválida";
    if (idade >= 18 && temPermissao === true) return "Acesso Liberado";
    return "Acesso Negado";
}

console.log(verificarAcesso(20, true));
console.log(verificarAcesso(16, true));
console.log(verificarAcesso(-5, false));