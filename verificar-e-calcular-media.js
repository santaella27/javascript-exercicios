function calcularMedia(n1, n2) {
    return (n1 + n2) / 2;
}

function verificarMedia(media) {
    if (media >= 7 ) {
        return "Aprovado"
    } else if (media >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"

    }
}

let mediaAluno = calcularMedia(9, 7);
let situacao = verificarMedia(mediaAluno);

console.log("Média:", mediaAluno);
console.log("Situação:", situacao);