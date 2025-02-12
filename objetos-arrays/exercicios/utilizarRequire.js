// const dados = require('./dados.json');

// console.log(Object.keys(dados));


const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}


const produtoDados = JSON.stringify(produto);
console.log(produtoDados);