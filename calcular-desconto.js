function calcularDesconto(preco, porcentagem) {
  let desconto = (preco * porcentagem) / 100;
  let precoFinal = preco - desconto;

  if (preco >= 150) {
    return precoFinal;
  } else {
    return preco;
  }
}

console.log(calcularDesconto(200, 20));
