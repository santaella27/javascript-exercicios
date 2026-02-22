function classificarNota(nota) {
    if (nota < 0 || nota > 10) return "Nota inválida";
    if (nota >= 7) return "Aprovado";
    if (nota >= 5 && nota < 7) return "Recuperação";
    return "Reprovado";
}

console.log(classificarNota(9));
console.log(classificarNota(4));
console.log(classificarNota(11));
console.log(classificarNota(6));