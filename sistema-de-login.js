const prompt = require("prompt-sync")();


let senha = Number(prompt("Digite sua senha: "));

function sistemaLogin(senha) {
    
    if (isNaN(senha)) return "Senha inválida";
    if (senha === 1234) return "Acesso permitido";
    return "Acesso negado";
}

console.log(sistemaLogin(senha));