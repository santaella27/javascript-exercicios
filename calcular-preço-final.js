function calcularPrecoFinal(preco, temCupom) {

    if (preco <= 0) return "Preço inválido";
    if (temCupom === true) return preco - (preco * 0.20);
    return preco;
}
   console.log(calcularPrecoFinal(100, true));