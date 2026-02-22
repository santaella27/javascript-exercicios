function verificarMaiorIdade(idade) {
    if (idade < 0) return "Idade Inválida";
    if (idade >= 18) return "Maior de idade";
    return "Menor de idade";
}

console.log(verificarMaiorIdade(20));
console.log(verificarMaiorIdade(15));
console.log(verificarMaiorIdade(-17));