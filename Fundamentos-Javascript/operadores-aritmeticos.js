// let media1 = 6;
// let media2 = 4;
// let media3 = 2;

// const media = (media1 + media2 + media3) / 3;
// console.log(media);

// if (media >= 5) {
//     console.log(" você foi aprovado");
// } else {
//     console.log(" você foi reprovado");
// }

// function multiplica(a, b){
//     return a * b;
// }

// console.log(multiplica(3,7));

// const total = multiplica(3, 7) + 10;
// console.log(total);


function realizarVenda(quantidade) {
    if (quantidade > estoqueProdutoA) {
        console.log("Quantidade insuficiente em estoque.");
    } else {
        estoqueProdutoA -= quantidade;
        console.log(`Venda realizada com sucesso. Novo estoque: ${estoqueProdutoA}`);
    }
}

