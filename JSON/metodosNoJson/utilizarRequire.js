// const dados = require('../_json/dados.json');

// console.log(Object.keys(dados));


const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}


const produtoDados = JSON.stringify(produto);
console.log(produtoDados);