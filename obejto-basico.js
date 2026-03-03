let produto = {
    nome: "Mouse",
    preco: 100,
    estoques: 3,
}
console.log(produto.nome);
console.log(produto.preco);

produto.preco = produto.preco + 10
console.log(produto.preco);

produto.categoria = "eletronicos";
console.log(produto.categoria);
console.log(produto);