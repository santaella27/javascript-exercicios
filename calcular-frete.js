function calcularFrete(valorCompra) {
    if (valorCompra < 50) return 15;
    if (valorCompra >= 50 && valorCompra < 100) return 5;
    return 0;
}

console.log(calcularFrete(30));
console.log(calcularFrete(70));
console.log(calcularFrete(150));