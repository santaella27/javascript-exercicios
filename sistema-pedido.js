const prompt = require("prompt-sync")();

let produto = prompt("Digite o nome do produto: ");
let preco = Number(prompt("Digite o valor do produto: "));
let quantidade = Number(prompt("Digite a quantidade do produto: "));


function sistemaPedido(produto, preco, quantidade) {
    if (isNaN(preco) || isNaN(quantidade)) return "Dados inválidos";
    if (preco <= 0 || quantidade <= 0) return "Dados inválidos";
    const total = preco * quantidade; 
    if (total >= 100) return `Pedido aprovado. Total: ${total}R$`;
    return "Pedido reprovado";

}
console.log(sistemaPedido(produto, preco, quantidade));