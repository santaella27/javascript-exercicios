const prompt = require("prompt-sync")();

let saldo = Number(prompt("Digite seu saldo: "));
let valor = Number(prompt("Digite o valor: "));

function avaliarCompra(saldo, valor){
if (isNaN(valor) || isNaN(saldo)) return "ERROR";   
if (saldo < valor) return "Saldo Insuficiente";
return "Compra Aprovada";
}
console.log(avaliarCompra(saldo, valor));
