function verificarAcesso(idade) {
    if (idade < 0) return "Valor inválido";
    if (idade >= 18) return "Aprovado";
    return "Bloqueado";
}

function processarPerfil(nome, idade) {
    const usuario = {
        nomeUsuario: nome,
        idadeUsuario: idade,
        statusAcesso: verificarAcesso(idade),
    }
    return usuario;
}

console.log(processarPerfil("Sebastian", 22));
console.log(processarPerfil("Maria", 16));
console.log(processarPerfil("João", -5));