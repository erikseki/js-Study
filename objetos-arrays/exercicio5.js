// // exercício 1, adicionar método de calculo de média. 
// // depois mostrar com base na nota, o nivel de desempenho
// const pessoa = {
//     nome: 'Erik',
//     notas: [6, 8],
//     calcularMediaNotas: function () {
//         const media = (this.notas[0] + this.notas[1]) / 2
//         console.log(media);
//         return media;
//     },
//     classificarDesempenho: function () {
//         const mediaDesempenho = this.calcularMediaNotas();
        
//         if (mediaDesempenho >= 9) {
//             console.log("Desempenho excelente");
//         } else if (7.6 <= mediaDesempenho && mediaDesempenho <= 8.9) {
//             console.log("Bom Desempenho");
//         } else if (6 <= mediaDesempenho && mediaDesempenho <= 7.5) {
//             console.log("Desempenho regular");
//         } else if (mediaDesempenho < 6) {
//             console.log("Desempenho insuficiente");
//         }
//     }
// }

// pessoa.classificarDesempenho();


// exercício 2, criar um objeto carro com as propriedades. 
// usar o for para percorrer todos as props e informar o tipo de dado.
const carro = {
    marca: 'fiat',
    modelo: 'uno',
    ano: 2020,
    cor: 'branco',
    usado: false,
}

for (let chave in carro){
    const texto = ` a propriedade ${chave} tem o valor ${carro[chave]}`
    console.log(texto);
}


// exercicio 3 
