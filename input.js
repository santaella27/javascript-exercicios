const prompt = require("prompt-sync")();

let idade = prompt("Digite sua idade: ");
idade = Number(idade);

function classificarIdade(idade) {
    if (isNaN(idade) || idade <= 0) return "Idade inválida";
    if (idade < 18) return "Menor de idade";
    return "Adulto";
}

console.log(classificarIdade(idade));