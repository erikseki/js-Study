
// // objeto para armazenar diversos dados de uma pessoa
// const objPessoa = {
//     nome: 'josé silva',
//     idade: 32,
//     cpf: '12312312312',
//     turma: 'Javascript'
// }
// console.log(objPessoa);


// // objeto com array na chave "notas"
// const estudante2 = {
//     nome: "João",
//     idade: 15,
//     notas: [80, 90, 75],
//     escola: "Escola ABC"
// }
// console.log(estudante2.notas);

// const estudante = {
//     nome: 'Erik',
//     idade: 24, 
//     endereco: [{
//         rua: "ulisses paschoal",
//         numero: 74,
//         complemento: 'apto 34'
//     }]
// }

// estudante.endereco.push ({
//     rua: 'jabaquara',
//     numero: 300,
//     complemento: '',
// })
// estudante.endereco.pop();

// // console.log(estudante.endereco[0]);
// // console.log(estudante);


// // um filter para puxar somente aqueles que possuem complemento
// const listaEndereco = estudante.endereco.filter((endereco) => (endereco.complemento))
// console.log(listaEndereco);



const aluno = {
    nome: 'Erik',
    idade: 24, 
    nota: 8,
    // método de função dentro do objeto 
    resposta: function (media) {
        return this.nota >= media ? true : false;
    }
}

// passando um valor ao parâmetro da função no objeto.
console.log(aluno.resposta(6));