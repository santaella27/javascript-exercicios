const prompt = require("prompt-sync")();

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação (+ - * /): ");

function calculadoraSimples(num1, num2, operacao) {
    if (isNaN(num1) || isNaN(num2)) return "Valor inválido";
    if (operacao === "+") return num1 + num2;
    if (operacao === "-") return num1 - num2;
    if (operacao === "*") return num1 * num2;
    if (operacao === "/") return num1 / num2;
    return "Operação inválida";

}
console.log(calculadoraSimples(num1, num2, operacao));
